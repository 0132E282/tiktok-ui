
package pkg26.ps21346.nguyenhoangphuc.lab8;

import java.util.ArrayList;
import java.util.Scanner;

public class Ps21346NguyenhoangphucLab8 {
    static Scanner input = new Scanner(System.in);
    static tamGiac tg = new tamGiac();
    static xpoly x = new xpoly();
    public static void main(String[] args) {
//     int nhap ;
//     do{
//         System.out.println("bai 1 : chuong trinh tien ich");
//         System.out.println("bai 2 : chuong trinh tam giac");
//         System.out.print("nhap chung nang :");
//         nhap = Integer.parseInt(input.nextLine());
//         switch(nhap){
//             case 1:
//                  bai4();
//                 break;
//             case 2:
//                  bai5();
//                 break;
//             default:
//                 System.out.println("khong tim thay chuong trinh ");
//         }
//     }while(!input.nextLine().equalsIgnoreCase("thoat"));
       tongCacSoLe();
    }
    static void tongCacSoLe(){
     int a = input.nextInt();
        double arr[] = new double[a];
        for(int i =0;i<a;i++){
           System.out.print("nhap du lieu mang" +i+":");
           arr[i]= input.nextDouble();
        }
        System.out.println("tong ca so le :"+x.tongLe(arr));
    }
    static void bai4(){
      int nhap;
      do{
          System.out.println("1 chuong trinh tim tong");
          System.out.println("2 chuong tinh tim so lon nhat ");
          System.out.println("3 chuong trinh tim so nho nhat ");
          System.out.print("nhap bai tap muon xem :");
          nhap = Integer.parseInt(input.nextLine());
          switch(nhap){
              case 1:
                  kiemTratong();
                  break;
              case 2:
                  kiemTraMax();
                  break;
              case 3:
                  kiemTraMin();
                  break;
              case 4:
                  ten();
                  break;
              default :
                  System.out.println("khong thay chuong trinh ");
                   break;
          }
          System.out.print("nhap thoat de thoat :");
      }while(!input.nextLine().equalsIgnoreCase("thoat"));
    }
    static void kiemTratong(){
        System.out.print("nhap so luong ");
        int n = input.nextInt();
        double a[] = new double[n];
        for(int i =0;i<a.length;i++){
          System.out.print("nhap gia tri "+i+" :");
          a[i]=input.nextDouble();
        }
         System.out.println("tong gia tri :"+x.sum(a));
    }
     static void kiemTraMin(){
        System.out.print("nhap so luong ");
        int n = input.nextInt();
        double a[] = new double[n];
        for(int i =0;i<a.length;i++){
          System.out.print("nhap gia tri "+i+" :");
          a[i]=input.nextDouble();
        }
         System.out.println("gia tri nho nhat :"+x.min(a));
    }
    static void kiemTraMax(){
        System.out.print("nhap so luong ");
        int n = input.nextInt();
        double a[] = new double[n];
        for(int i =0;i<a.length;i++){
          System.out.print("nhap gia tri "+i+" :");
          a[i]=input.nextDouble();
        }
         System.out.println(" gia tri luon nhat :" +x.max(a));
    }
    static void ten(){
     System.out.print("nhap ten :");
     String n = input.nextLine();
     System.out.println("ten :"+x.topUper(n));
    }
    static void bai5(){
        System.out.println("nhap do dai cac canh :");
        System.out.print("nhap do dai canh a :");
        double a =input.nextDouble();
        System.out.print("nhap do dai canh b :");
        double b = input.nextDouble();
        System.out.print("nhap do dai canh c :");
        double c = input.nextDouble();
        System.out.println("thong tin tam giac :");
        System.out.println("loai tam giac :"+tg.kiemTratamGiac(a,b,c));
        System.out.println("chu vi tam giac :"+tg.chuViTamGiac(a,b,c));
        System.out.println("dien tich :"+tg.dienTichTamGiac(a,b,c));
    }
}
