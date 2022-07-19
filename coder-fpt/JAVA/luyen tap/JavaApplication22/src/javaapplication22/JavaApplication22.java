/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package javaapplication22;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author nguye
 */
public class JavaApplication22 {
    static ham h = new ham();
    static Scanner input = new Scanner(System.in); 
    static ArrayList<sinhVien> listsv = new ArrayList<sinhVien>();
    static  sinhVien sv = new sinhVien();
    public static void main(String[] args) {
        
       sinhVien();
       xuat();
    }
    static void sinhVien(){
       String nhap = null;
       sinhVien sv = new sinhVien();
        do{   
            sv.input();
            listsv.add(sv);
            do{
                System.out.print("co tiep tuc khong c/k :");
                nhap = input.nextLine();
                if(!nhap.matches("[c,k,C,K]")){
                  System.out.println("nhap sai nhap lai");
                }
            }while(!nhap.matches("[c,k,C,K]"));
       }while(!nhap.matches("[k,K]"));
    }
    static void xuat(){
        int dem=0;
      for(sinhVien sv :listsv){   
        sv.Xuat();
        dem++;
      }
      sv.siSo=dem;
      sv.xuattiso();
    }
    static void kiemTraHoTen(){
        int n =Integer.parseInt(input.nextLine());
        String arr[]= new String[n];
        for(int i =0;i<n;i++){
           arr[i]=input.nextLine();
        }
        h.HamDoDai(arr);
    }
    static void ramDom(){
     double min = input.nextDouble();
     double max = input.nextDouble();
     System.out.println((int)(h.RamDo(min,max)));
    }
}
