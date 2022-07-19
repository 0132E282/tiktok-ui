/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package javaapplication22;

import java.util.Scanner;

public class sinhVien {
    String ten ;
    String lop;
    int siSo=0;
    Scanner input = new Scanner(System.in);
    public void input(){
        ten = input.nextLine();
        lop = input.nextLine();
    }
    public void xuattiso(){
     System.out.println(siSo);   
    }
    public void Xuat(){
       System.out.println(ten);
       System.out.println(lop);
    }
}
