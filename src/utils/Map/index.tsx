import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    LocationObject
} from 'expo-location';
import { StyleSheet, View } from 'react-native';
import { useEffect } from 'react';


export function Map() {

    const [location, setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermission() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentPosition = await getCurrentPositionAsync();
            setLocation(currentPosition);
        }
    }

    useEffect(() => {
        requestLocationPermission();
    }, [])


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
                    zoomEnabled={false}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    />
                </MapView>
            }
        </View>
    );

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