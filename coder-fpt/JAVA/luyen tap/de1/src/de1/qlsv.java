
package de1;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class qlsv {
    static ArrayList<sinhVien> lsv = new  ArrayList<sinhVien>();
    static Scanner input = new Scanner(System.in);
    
    static void nhap(){
//        do{
//            sinhVien sv = new sinhVien();
//            sv.nhap();
//           lsv.add(sv);
//            System.out.print("nhap k de thoat :");
//        }while(input.nextLine().equalsIgnoreCase("k"));
          sinhVien sv = new sinhVien("nam","2",9);
          lsv.add(sv);
          sinhVien sv1 = new sinhVien("nhan","3",6);
          lsv.add(sv1);
           sinhVien sv2 = new sinhVien("hanh","5",1);
          lsv.add(sv2);
    }
    static void sapxep(){
        Collections.sort(lsv,new Comparator<sinhVien>() {
            @Override
            public int compare(sinhVien o1, sinhVien o2) {
               return (int) (o1.getDiem() - o2.getDiem());
            }
        });
        xuat();
    }
    static void xuat(){
       for(sinhVien sv : lsv){   
           System.out.println(" \n");
           sv.Xuat();
       }
    }
}
