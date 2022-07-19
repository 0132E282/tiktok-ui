
package pkg26.ps21346.nguyenhoangphuc.lab6;

import java.util.ArrayList;
import java.util.Scanner;

public class Ps21346NguyenhoangphucLab6 {
    static ArrayList<sanPham> Listsp = new ArrayList<sanPham>();
    static ArrayList<sinhVien> Listsv = new ArrayList<sinhVien>();
    static Scanner input = new Scanner(System.in);
     static sanPham sp = new sanPham();
    public static void main(String[] args) {
      int nhap;
    do{
       System.out.println("bai 1 : xuat nhap chu in hoa");
       System.out.println("bai 2 : quan ly san pham ");
       System.out.println("bai 3 : quan ly sinh vien ");
       System.out.print("nhap bai muon xem :");
       nhap = Integer.parseInt(input.nextLine());
       switch(nhap){
           case 1:
                System.out.println("bai 1 : xuat nhap chu in hoa");
               bai1();
               break;
           case 2:
                 System.out.println("bai 2 : quan ly san pham ");
               bai2();
               break;
           case 3:
                  System.out.println("bai 3 : quan ly sinh vien ");
               bai3();
               break;
           default:
               System.out.println("khonh im thay chuong trinh ");
           break;
       }
     System.out.print("nhap thoat den thoat khoi chuong trinh hoat enter de tiep tuc :");
    }while(!input.nextLine().equalsIgnoreCase("thoat"));
    }
    static void bai1(){
    System.out.print("nhap ten :");
    String ten = input.nextLine();
    System.out.println( " xuat \n ten thuong:"+ten + "\n ten in hoa "+ten.toUpperCase());
}
    static void bai2(){
        int stt=1,stt2=1;
         do{
           sanPham sp = new sanPham();
           System.out.println("stt :"+stt++);
           sp.inputSanPham();
           Listsp.add(sp);
           System.out.println("nhap t de thoat :");
        }while(!input.nextLine().equalsIgnoreCase("t"));  
        for(sanPham sp : Listsp){
           System.out.println("stt :"+stt2++);
           sp.ouputSanPham();
        }
      System.out.println("tim hang muon xem  ");
      locSP();
    }
    static void locSP(){
        int stt=1;
        System.out.print("nhap hang :");
        String tenSanPham=input.nextLine();
        for(sanPham sp :Listsp){
            System.out.println("stt :"+stt++);
         if(sp.getHang().equalsIgnoreCase(tenSanPham)){   
             sp.ouputSanPham();
         }
        }
    }
//    bai 3
    static void bai3(){
        int nhap;
        System.out.println("nhap thong tin ");
        inputMain();
         System.out.println("xuat thong tin ");
        ouputMain();
        do{
            System.out.println("1 tim theo ten ");
            System.out.println("2 tim theo cmdd ");
            System.out.print("nhap chuc nang :");
            nhap=Integer.parseInt(input.nextLine());
            switch(nhap){
                case 1:
                    timtenSinhVien();
                    break;
                case 2:
                    timCMDDSinhVien();
                    break;
                default:
                    System.out.println("khong tim thay chuong trin ");
                    break;
            }
        }while(input.nextLine().equalsIgnoreCase("thoat"));
    }
    static void inputMain(){
        int stt =1;
        do{  
            System.out.println("stt"+stt++);
            sinhVien sv = new sinhVien();
            sv.inputSv();
            Listsv.add(sv);            
            System.out.print("nhap t de thoat :");
        }while(!input.nextLine().equalsIgnoreCase("t"));
    }
    static void ouputMain(){
        int stt=1;
        for(sinhVien sv : Listsv){
             System.out.println("stt"+stt++);
            sv.ouputThongTin();
            sv.ouputHocLuc();
        }
      }
  
    static void timtenSinhVien(){
         System.out.print("\n nhap Ten :");
         String ten = input.nextLine();
         for(sinhVien sv:Listsv){            
             if(sv.getTen().equalsIgnoreCase(ten)){
                sv.ouputThongTin();
                 sv.ouputHocLuc();
             }
         }
     }
    static void timCMDDSinhVien(){
          String cmdd;
        do{
         System.out.print("nhap cmdd :");
          cmdd = input.nextLine();
          if(!cmdd.matches("[0-9]{9,10}")){
            System.out.println("nhap sai nhap lai");
           }
        }while(!cmdd.matches("[0-9]{9,10}"));
         for(sinhVien sv:Listsv){
             if(sv.getScmdd().equalsIgnoreCase(cmdd)){
                sv.ouputThongTin();
                 sv.ouputHocLuc();
             }
         }
     }
}