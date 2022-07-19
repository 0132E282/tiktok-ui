
package de1;

import static de1.De1.input;
import java.util.ArrayList;
import java.util.Scanner;

public class bai1 {
   static Scanner input = new Scanner(System.in);
   static ham h = new  ham();
        static void bai1(){
        String nhap;
        int chucNang;
       do{
          System.out.println("1 : tinh tong chan");
          System.out.println("2 tịnh tong le");
          System.out.print("nhap chuc nang :");
         chucNang = Integer.parseInt(input.nextLine());
        switch(chucNang){
            case 1:
                tongChan();
                break;
            case 2:
                tongLe();
                break;
        }       
        do{
         System.out.print("nhap chuong trinh c/k ");
         nhap= input.nextLine();
         if(!nhap.matches("[c,k]")){
             System.out.println("nhap sai nhap lại");
         }
        }while(!nhap.matches("[c,k]"));
       }while(!nhap.matches("[k]"));
    }
    static void tongChan(){
        int tong=0;
        System.out.print("nhap mang muon tinh tong :");
        int n = input.nextInt();
        int arr[]=new int[n];
        for(int i=0 ;i<n;i++){
            System.out.print("nhap mang "+i+":");
            arr[i]= input.nextInt();
        }
        h.hamTongChan(arr);
    }
    static void tongLe(){
        int tong=0;
        System.out.print("nhap mang muon tinh tong :");
        int n = input.nextInt();
        int arr[]=new int[n];
        for(int i=0 ;i<n;i++){
            System.out.print("nhap mang "+i+":");
            arr[i]= input.nextInt();
        }
        h.hamTongLe(arr);
    }
}
