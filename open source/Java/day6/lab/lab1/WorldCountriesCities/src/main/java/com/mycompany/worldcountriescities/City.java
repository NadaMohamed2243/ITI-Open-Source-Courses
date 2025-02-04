/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.worldcountriescities;

/**
 *
 * @author nadam
 */
public class City {
    private int id;
    private String name;
    private int population;
    private String countryCode; 
    
    public City(int _id,String _name,int _population,String _countryCode){
        id=_id;
        name=_name;
        population=_population;
        countryCode=_countryCode;
    }
    
    public int getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    
    public int getPopulation() {
        return population;
    }

    public String getCountryCode() {
        return countryCode;
    }

    
    @Override
    public String toString() {
        return "City{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", population=" + population +
                ", countryCode='" + countryCode + '\'' +
                '}';
    }
    
    
}
