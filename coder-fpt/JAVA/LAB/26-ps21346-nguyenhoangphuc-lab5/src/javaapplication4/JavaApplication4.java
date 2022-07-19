
package javaapplication4;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.Scanner;
import java.util.Collections;

public class JavaApplication4 {
    static Scanner input = new Scanner(System.in);
    static ArrayList<Double> arrdouble = new ArrayList<Double>();
    static ArrayList<String> arrString = new ArrayList<String>();
    static ArrayList<sanPham> dssp = new ArrayList<sanPham>();
    public static void main(String[] args) {
        do{
        System.out.println("1 bai 1");
        System.out.println("2 bai 2");
        System.out.println("3 bai 3");
        System.out.print("nhap chuong trinh :");
        int nhapSo = Integer.parseInt(input.nextLine());
        switch(nhapSo){
             case 1:
                bai1();
                break;
            case 2:
                bai2();
                break;
            case 3:
               bai3();
                break;
            default:
                System.out.println("khong tim thay chuong tring");
        }
        System.out.print("nhap thoat de thoat khoi chuong trinh 3:");
        }while(!input.nextLine().equalsIgnoreCase("thoat"));
    }
    static void bai1(){
      System.out.println("chuong trinh 1 nhap con so thuc va nguyen ");
      inputMainConSo();
      ouputMainConSo();
    }
    static void inputMainConSo(){            
        do{
            System.out.print("nhap so :");
            double x = input.nextDouble();
            arrdouble.add(x);
            input.nextLine();
            System.out.print("nhap n de thoat  :");            
        }while(!input.nextLine().equalsIgnoreCase("n"));
    }
    static void ouputMainConSo(){
        for(double a : arrdouble){
          System.out.println("gia tri : "+a);
        }
    }
//    bai 2
    static void bai2(){
        System.out.println("chuong trinh 2 quan ly thong tinh ");
        inputName();
        do{
        System.out.println("1 xuat ten ");
        System.out.println("2 Xuat ngau nhien ");
        System.out.println("3 nhap va xoat ten ");
        System.out.print("nhap chuc nang :");
        int nhap = Integer.parseInt(input.nextLine());
        switch(nhap){
            case 1:
                ouputName();
                break;
            case 2:
                sapXepNameNgauNhien();
                break;
            case 3: 
                seachendRemove();
                break;
            default:
                System.out.println("khong tim thay chuong tring");
        }
        System.out.print("nhap thoat de thoat khoi bai 2 hoat enter tiep tuc:");
        }while(!input.nextLine().equalsIgnoreCase("thoat"));
    }
    static void inputName(){
        do{
            System.out.print("nhap ten :");
            String name = input.nextLine();
            arrString.add(name);
            System.out.print("nhap n de thoat :");
        }while(!input.nextLine().equalsIgnoreCase("n"));
    }
      static void ouputName(){
          System.out.println("xuat ");
          for(String n : arrString){
              System.out.println("ten :"+n);
          }
      }
      static void sapXepNameNgauNhien(){
          Collections.shuffle(arrString);
          System.out.println("xap sep ngau nhien");
          ouputName();     
      }
      static void xapSepTangName(){
          Collections.sort(arrString);
          Collections.reverse(arrString);
          ouputName();   
      }
      static void seachendRemove(){
          System.out.print("nhap ten muon xoa :");
          String ten =input.nextLine();
               arrString.remove(ten);
               ouputName(); 
      }
//      bai 3
      static void bai3(){
          System.out.println("chuong trinh 3 quan ly san pham ");
          inputSanPham();
        do{
        System.out.println("1 xuat thong tin tang dan theo gia");
        System.out.println("2 trung binh gia cua san pham");
        System.out.print("nhap chuong trinh :");
        int nhapSo = Integer.parseInt(input.nextLine());
        switch(nhapSo){
            case 1:
                ouputSanPham();
                break;
            case 2:
                giatTrung();
                break;
            default:
                System.out.println("khong tim thay chuong tring");
        }
        System.out.print("nhap thoat de thoat khoi bai 3 hoat enter tiep tuc:");
        }while(!input.nextLine().equalsIgnoreCase("thoat"));
      }
      static void inputSanPham(){
          System.out.println("");
          do{             
              sanPham sp = new sanPham();
              sp.inputSanPham();
              dssp.add(sp);
              System.out.print("nhap n de thoat :");
          }while(!input.nextLine().equalsIgnoreCase("n"));
      }
       static void ouputSanPham(){
            System.out.println("");
           Collections.sort(dssp,new Comparator<sanPham>() {
               @Override
               public int compare(sanPham o1, sanPham o2) {
                 return (int) (o1.getGia() - o2.getGia());
               }
           });           
           for(sanPham sp1 : dssp){              
               sp1.ouputSanPham();
           }
       }
       static void giatTrung(){ 
           float gia2 = 0;
           int dem =0;
           float gia = 0;
           System.out.println("");
        for(sanPham n : dssp){   
            dem ++;
            gia+=n.getGia();
        }
        System.out.println("gia trung binh cua san pham :"+( gia / dem));
       }
}