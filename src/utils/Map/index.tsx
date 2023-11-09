import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject,
    watchPositionAsync
} from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { api } from 'src/lib/axios';
import io from 'socket.io-client';


export function Map() {

    const socket = io('http://192.168.3.6:3000');

    const [location, setLocation] = useState<LocationObject | null>(null);
    const [userOn, setUserOn] = useState<
        {
            tb_profissional_id: number;
            tb_profissional_rua: string;
            tb_profissional_longitude: number;
            tb_profissional_latitude: number;
            tb_profissional_nome: string;
        }[]
    >([]);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync()
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, []);


    useEffect(() => {
        socket.on('searchProfessionals', async () => {
            const professionals = await api.get('/getProfessionalsOn');
            setUserOn(professionals.data);
        });
    }, []);


    useEffect(() => {
        if (location) {
            watchPositionAsync(
                { distanceInterval: 10 }, 
                (newLocation) => {
                    api.put('/saveLocation', {
                        latitude: newLocation.coords.latitude,
                        longitude: -46.8889,
                    })
                        .then(() => {
                            console.log('Location Saved :)');
                        })
                        .catch((error) => {
                            console.log('ERRO: ' + error);
                        });
                }
            );
        }
    }, [location]);

    return (
        <View style={styles.container}>

            {
                location &&

                <MapView style={styles.map}
                    region={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.00134
                    }}
                    loadingEnabled
                    zoomEnabled={true}
                >

                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude
                        }}
                        pinColor="blue"
                    />

                    {
                        userOn &&
                        
                        userOn.map((user) => (
                            <Marker
                                key={user.tb_profissional_id}
                                coordinate={{
                                    latitude: user.tb_profissional_latitude,
                                    longitude: user.tb_profissional_longitude
                                }}
                                title={user.tb_profissional_nome}
                            />
                        ))
                    }
                </MapView>
            }

            <View>
                {
                    userOn.map((user) => (
                        <Text key={user.tb_profissional_id}>{user.tb_profissional_nome}, {user.tb_profissional_rua} </Text>

                    ))
                }
            </View>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});

