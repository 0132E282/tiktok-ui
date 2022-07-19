
package pkg26.ps21346.nguyenhoangphuc.lab7;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Collections;
import java.util.Comparator;

public class Ps21346NguyenhoangphucLab7 {
    static ArrayList<sinhVien> Listsvit = new ArrayList<sinhVien>();
    static sinhVienIT svit = new sinhVienIT();
    static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        int nhap;
       do{
           System.out.println("bai 1 :chu vi dien tich hinh chu nhat vs hinh vuong");
           System.out.println("bai 2 : thong tin sinh vien ");
           System.out.println("bai 3 :chuong trinh quan ly sinh vien ");
           System.out.print("nhap chuong trinh :");
           nhap = Integer.parseInt(input.nextLine());
           switch(nhap){
               case 1:
                   bai1();
                   break;
               case 2:
                   bai2andbai3();
                   break;
               case 3:
                   bai4();
                   break;
               default:
                   System.out.println("khong tim thay chuong trinh");
           }
           System.out.print("nhap thoat de thoat :");
       }while(input.nextLine().equalsIgnoreCase("thoat"));
    }
     static void bai1(){
         chuNhat cn = new chuNhat();
        hinhVuong hv = new hinhVuong();
         System.out.println("hinh chu nhat");
         cn.input();
         cn.ouput();
         System.out.println("hinh vuong");
         hv.inputHinhVuong();
         hv.ouputHinhVuong();
     }
     static void bai2andbai3(){         
         System.out.println("nhap thong tinh sinh Vien ");
         svit.inputSinhVienIT();
         System.out.println("xuat thong tin sinh vien ");
         svit.ouputSinhVien();
     }    
     static void bai4(){
         int nhap;
         System.out.println("nhap thong tinh sinh vien");
         input_sinhVien();
        do{
           System.out.println("1 chuong xuat thong tin sinh vien");
           System.out.println("2 chuong trinh xuat thong tinh sinh vien loat gioi");
           System.out.println("3 chuong tinh xap sep thong tin sinh vien ");
           System.out.println("4 hoc bong sinh vien");
           System.out.print("nhap chuong trinh :");
           nhap = Integer.parseInt(input.nextLine());
           switch(nhap){
               case 1:
                   ouput_sinhVien();
                   break;
               case 2:
                   ouputSinhVienGio();
                   break;
               case 3:
                   sapXep();
                   break;
               case 4:
                   hocBong();
                   break;
               default:
                   System.out.println("khong tim thay chuong trinh");
           }
           System.out.print("nhap thoat de thoat khoi chuong bai 3:");
       }while(!input.nextLine().equalsIgnoreCase("thoat"));
     }
     static void input_sinhVien(){
         do{
             System.out.println(" ");
             sinhVienIT svIT = new sinhVienIT();
             sinhVienbig svbig = new sinhVienbig();
             System.out.print("nhap ten :");
             String ten = input.nextLine();
             System.out.print("nhap nganh it/marketing :");
             String nganh = input.nextLine();
             if(nganh.equalsIgnoreCase("it")){
              svIT.ten = ten;
              svIT.nganh = "sinh vien IT";
              svIT.inputSinhVienIT();
              Listsvit.add(svIT);
             }else if(nganh.equalsIgnoreCase("marketing")){
               svbig.ten = ten;
               svbig.nganh="ngan marketing";
               svbig.input();
               Listsvit.add(svbig);
             }           
             System.out.print("nhap k de thoat kho chuong trinh :");
         }while(!input.nextLine().equalsIgnoreCase("k"));
     }
      static void ouput_sinhVien( ){
          for(sinhVien sv :Listsvit){
             System.out.println(" ");
             sv.ouputSinhVien();
          }
      }
      static void ouputSinhVienGio(){
            boolean ok = true;
          for(sinhVien sv:Listsvit){
              if(sv.gethocLuc().equalsIgnoreCase("gioi")){
                sv.ouputSinhVien();
              }else{
                 ok = false;   
              }
          }
          if(ok == false ){
             System.out.println("thong tinh sinh vien khong co");
          }
      }
      static void sapXep(){
          Collections.sort(Listsvit,new Comparator<sinhVien>(){
              @Override
              public int compare(sinhVien o1, sinhVien o2) {
                  return (int) (o2.getdiem() - o1.getdiem() );
              }
      });
           ouput_sinhVien();
      }
      static void hocBong(){
          for(sinhVien sv: Listsvit ){   
           sv.ouputSinhVien();
           System.out.println("hoc bong :"+sv.hocBong());
          }
      }
}