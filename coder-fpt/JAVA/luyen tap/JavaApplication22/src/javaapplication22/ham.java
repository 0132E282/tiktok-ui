/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication22;

/**
 *
 * @author nguye
 */
public class ham {
    
    public static String HamDoDai(String ... ham){
        String tong = ham[0];
        for(int i =0;i<ham.length;i++){
            if(tong.length() < ham[i].length()){
                tong = ham[i];
            }
        }
        System.out.println(tong);
        return null;
    }
    static double RamDo(double min , double max){
     return Math.random()*((min + max) + 1);
    }
}
