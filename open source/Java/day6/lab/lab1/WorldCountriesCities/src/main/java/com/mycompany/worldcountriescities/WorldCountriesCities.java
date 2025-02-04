/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com.mycompany.worldcountriescities;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;
/**
 *
 * @author nadam
 */
public class WorldCountriesCities {

    public static void main(String[] args) {
        
        List<Country> countries = loadCountries("C:\\Users\\nadam\\Downloads\\open source\\Java\\day6\\lab\\Countries.csv");
        List<City> cities = loadCities("C:\\Users\\nadam\\Downloads\\open source\\Java\\day6\\lab\\Cities.csv");
        
        // Print Countries list
//        System.out.println("Countries:");
//        for (Country country : countries) {
//            System.out.println(country);
//        }
//
//        // Print cities list
//        System.out.println("\nCities:");
//        for (City city : cities) {
//            System.out.println(city);
//        }
        




          // Find the highest populated city of each country
            System.out.println("-----------------------------------------------------");
            System.out.println("Find the highest populated city of each country");

            cities.stream()
//                   Groups cities by their countryCode using Collectors.groupingBy(), so we get a Map<String, List<City>> where:
//                   The key is the countryCode.
//                   The value is a list of cities belonging to that country
                    .collect(Collectors.groupingBy(City::getCountryCode))
                    .forEach((countryCode, cityList) -> 
                        cityList.stream()
                                .max(Comparator.comparingInt(City::getPopulation))
                                .ifPresent(city -> 
                                    System.out.println("Country Code: " + countryCode + ", City: " + city.getName())));

            // Find the most populated country of each continent
            System.out.println("-----------------------------------------------------");
            System.out.println("Find the most populated country of each continent");

            countries.stream()
                    .collect(Collectors.groupingBy(Country::getContinent))
                    .forEach((continent, countryList) -> 
                        countryList.stream()
                                   .max(Comparator.comparingInt(Country::getPopulation))
                                   .ifPresent(country -> 
                                       System.out.println("Continent: " + continent + ", Country: " + country.getName())));

            // Find the highest populated capital city
            System.out.println("-----------------------------------------------------");
            System.out.println("Find the highest populated capital city");

            countries.stream()
                    .map(country -> cities.stream()
                            .filter(city -> city.getId() == country.getCapital())
                            .findFirst()
                            .orElse(null))
                    .filter(Objects::nonNull)
                    .max(Comparator.comparingInt(City::getPopulation))
                    .ifPresentOrElse(
                            city -> System.out.println("Highest populated capital city: " + city.getName()),
                            () -> System.out.println("No capital city found.")
                    );



        //now we have Countries list and cities list
        // Find the highest populated city of each country
//        System.out.println("-----------------------------------------------------");
//        System.out.println("Find the highest populated city of each country");
//
//        Map<String, City> highestPopulatedCityByCountry = cities.stream()
//                .collect(Collectors.groupingBy(
//                        City::getCountryCode,
//                        Collectors.collectingAndThen(
//                                Collectors.maxBy(Comparator.comparingInt(City::getPopulation)),
//                                Optional::get
//                        )
//                ));
//
//        for (Map.Entry<String, City> entry : highestPopulatedCityByCountry.entrySet()) {
//            System.out.println("Country Code: " + entry.getKey() + ", City: " + entry.getValue().getName());
//        }
//
//        // Find the most populated country of each continent
//        System.out.println("-----------------------------------------------------");
//        System.out.println("Find the most populated country of each continent");
//
//        Map<String, Country> mostPopulatedCountryByContinent = countries.stream()
//                .collect(Collectors.groupingBy(
//                        Country::getContinent,
//                        Collectors.collectingAndThen(
//                                Collectors.maxBy(Comparator.comparingInt(Country::getPopulation)),
//                                Optional::get
//                        )
//                ));
//
//        for (Map.Entry<String, Country> entry : mostPopulatedCountryByContinent.entrySet()) {
//            System.out.println("Continent: " + entry.getKey() + ", Country: " + entry.getValue().getName());
//        }
//
//        // Find the highest populated capital city
//        System.out.println("-----------------------------------------------------");
//        System.out.println("Find the highest populated capital city");
//
//        Map<Integer, City> cityMap = cities.stream().collect(Collectors.toMap(City::getId, city -> city));
//
//        City highestPopulatedCapital = countries.stream()
//                .map(country -> cityMap.get(country.getCapital()))
//                .filter(Objects::nonNull)
//                .max(Comparator.comparingInt(City::getPopulation))
//                .orElse(null);
//
//        if (highestPopulatedCapital != null) {
//            System.out.println("Highest populated capital city: " + highestPopulatedCapital.getName());
//        } else {
//            System.out.println("No capital city found.");
//        }
    }

    // For reading data from CSV files
    public static List<Country> loadCountries(String filename) {
        List<Country> countries = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            br.readLine(); // Skip header
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                countries.add(new Country(
                        data[0], data[1], data[2],
                        Double.parseDouble(data[3]),
                        (data[4].contains(".") ? (int) Double.parseDouble(data[4]) : Integer.parseInt(data[4])),
                        Double.parseDouble(data[5]),
                        (data[6].contains(".") ? (int) Double.parseDouble(data[6]) : Integer.parseInt(data[6]))
                ));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return countries;
    }

    public static List<City> loadCities(String filename) {
        List<City> cities = new ArrayList<>();
        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {
            String line;
            br.readLine(); // Skip header
            while ((line = br.readLine()) != null) {
                String[] data = line.split(",");
                cities.add(new City(
                        Integer.parseInt(data[0]),
                        data[1],
                        Integer.parseInt(data[2]),
                        data[3]
                ));
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return cities;
    }
}