
package baithi;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

public class BaiThi {
    static Scanner input = new Scanner(System.in);
    static ham h = new ham();
    static ArrayList<sinhVien> lsv= new ArrayList<sinhVien>();
    public static void main(String[] args) {
        String nhap;
        int cn;
        do{
            System.out.println("bai 1");
            System.out.println("bai 2");
            System.out.println("bai 3 ");
            System.out.print("nhap chuong trinh ");
            cn = input.nextInt();
            switch(cn){
                case 1:
                    tongChiHetcho9();
                    break;
                case 2:
                     tbCacSoChiaHet3();
                    break;
                case 3:
                    bai3();
                    break;
            }
            do{
             nhap = input.nextLine();
            if(!nhap.matches("C,K,c,k")){
             System.out.println("nhap sai nhap lai");
             
            }
            }while(!nhap.matches("[c,k,C,K]"));
        }while(!nhap.matches("[c,k]"));
    }
    static void bai3(){
        String nhap =null;
        int cn;
        do{
            System.out.println("nhap ");
            System.out.println("xuat ");
            System.out.print("nhap chuong trinh ");
            cn = Integer.parseInt(input.nextLine());
             switch(cn){
                case 1:
                     nhap();
                    break;
                case 2:
                      xuat();
                    break;
            }
           do{
               System.out.println("muon thoat k c/k");
               nhap = input.nextLine();
               if(!nhap.matches("C,K,c,k")){
               System.out.println("nhap sai nhap lai");
               }
            }while(!nhap.matches("[c,k,C,K]"));
        }while(!nhap.matches("[c,k]"));
     }
    static void tongChiHetcho9(){
      System.out.println("nhap so mang tinh tong :");
      int n = input.nextInt();
      double arr[] = new double[n];
      for(int i =0;i<n;i++){
       System.out.print("nhap gia tri :"+i +":");
       arr[i]=input.nextDouble();
      }
      System.out.println("tong cac so chia het cho 9 :"+h.tongChiHetChoChin(arr));
    }
    static void tbCacSoChiaHet3(){
      System.out.println("nhap so mang tinh tong :");
      int n = input.nextInt();
      double arr[] = new double[n];
      for(int i =0;i<n;i++){
       System.out.print("nhap gia tri :"+i +":");
       arr[i]=input.nextDouble();
      }
      System.out.println("trung binh tong cac so chia het cho 3 :"+h.tbCHiHetChoBa(arr));
    }
    static void nhap(){
       String nhap = null;
       do{
           sinhVien sv = new sinhVien();
           sv.nhapSV();
           sv.hocLuc();
           lsv.add(sv);
           do{
               System.out.print("muon ket thuc khong c/k :");
               nhap = input.nextLine();
               if(!nhap.matches("[c,c,K,k]")){
                 System.out.println("nhap sai nhap lai");
               }
           }while(!nhap.matches("[c,C,k,K]"));

       }while(!nhap.matches("[c,C]"));
    }
    static void xuat(){
     Collections.sort(lsv, new Comparator<sinhVien>() {
         @Override
         public int compare(sinhVien o1, sinhVien o2) {
             return (int) (o2.diem - o1.diem );
         }
     });
     for(sinhVien sv:lsv){   
       sv.xuatSv();
     }
    }
}
