
package asm;
import java.util.Comparator;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Collections;
public class Asm {
        static ArrayList<nhanSu> dsns = new ArrayList<nhanSu>();
        static Scanner input = new Scanner(System.in);
    public static void main(String[] args) {
        int n;
        System.out.println("nhap du lieu ");
        input();
        do{
        System.out.println(" 1 : xuat thong tin sinh vien");
        System.out.println(" 2 :tim  va hien thi nhan vien theo ma ");
        System.out.println(" 3 :xoa nhan vien theo ma ");
        System.out.println(" 4 :cap nhap thong tinh nhan vien theo ma ");
        System.out.println(" 5 :tim va cac nhan vien theo khoang luong");
        System.out.println(" 6 :sap nhan vien theo ho ten ");
        System.out.println(" 7 :sap sap nhan vien theo thu nhap ");
        System.out.println(" 8 :xuat 5 nhan vien co thu nhap cao nhat ");
        System.out.println(" 9 :thoat ");
        System.out.println("============================================>");
        System.out.print(" nhap chung nang muon su dung hoat 9 de thoat : ");
        n = Integer.parseInt(input.nextLine());
        switch(n){
                case 1:
                      System.out.println(" 1 : xuat thong tin nhan vien");
                      ouput();
                      break; 
                case 2:
                      System.out.println(" 2 :tim  va hien thi nhan vien theo ma ");
                      search();
                      break; 
                case 3:
                      System.out.println(" 3 : xoa nhan vien theo ma ");
                      xoanhanVientheoMa();
                      break; 
                case 4:
                      System.out.println(" 4 : cap nhap thong tinh nhan vien theo ma ");     
                      capNhap();
                      break; 
                case 5:
                      System.out.println(" 5 : tim va cac nhan vien theo khoang luong");
                      searchKhoangLuong(); 
                      break; 
                case 6:
                      System.out.println(" 6 : sap nhan vien theo ho ten ");
                       xapSepNhanVienTheoTen();
                       break;
                case 7:
                      System.out.println(" 7 : sap sap nhan vien theo thu nhap ");
                      xapSepTheoluong();
                      ouput();
                      break; 
                case 8:
                      System.out.println("8 : xuat 5 nhan vien co thu nhap cao nhat ");
                      top5NhanVien();
                      break; 
                default:
                      System.out.println("khong tim thay chuong trinh ");
                      break;
               }
        }while(n !=9);               
       }
//  ct 1  
  static void input(){
      int stt=1;
      String chucVu,ten,ma;
      do{
         System.out.println("\nstt"+stt++);
         chuongPhong cp = new chuongPhong();
         tiepThi tt=new tiepThi();
         hanhchinh hc = new hanhchinh();
         System.out.print("nhap ho ten :");
         ten = input.nextLine();
         System.out.print("nhap ma :");
         ma = input.nextLine();
         do{
         System.out.print("nhap chuc vu :(tiep thi / chuong phong / hanh chinh) :");
         chucVu = input.nextLine();
         if(chucVu.equalsIgnoreCase("tiep thi")){
             tt.ten = ten;
             tt.ma = ma;
             tt.chucVu="chuc vu tiep thi";
             tt.input();
             dsns.add(tt);
         }else if(chucVu.equalsIgnoreCase("hanh chinh")){
             hc.ten= ten;
             hc.ma = ma;
             hc.chucVu ="chuc vu hanh chinh";
             hc.input();
             dsns.add(hc);
         }else if(chucVu.equalsIgnoreCase("chuong phong")){
             cp.ten = ten;
             cp.ma = ma;
             cp.chucVu ="chuc vu chuong phong";
             cp.input();
             dsns.add(cp);
         }else
             System.out.println("nhap sai nhap lai : ");
         }while(!chucVu.equalsIgnoreCase("hanh chinh") && !chucVu.equalsIgnoreCase("tiep thi")&& !chucVu.equalsIgnoreCase("chuong phong"));
            System.out.print("nhap k de thoat :");
         }while(!input.nextLine().equalsIgnoreCase("k"));
   }
//  ct 2
  static void ouput(){
      int stt=1;
      for(nhanSu ns: dsns){
          System.out.println("\n stt"+stt++);
         if( ns instanceof tiepThi){
          ((tiepThi)ns).ouput();                 
         }else if(ns instanceof chuongPhong){
          ((chuongPhong)ns).ouput();
         }else if(ns instanceof hanhchinh ){
          ((hanhchinh)ns).ouputNhanSu();
         }
      }
       System.out.println(" ");
  }
  // ct 3
  static void search(){
   System.out.print("nhap ma nhan vien :");
   String ma = input.nextLine();
   for(nhanSu ns : dsns){
    if(ns.ma.equalsIgnoreCase(ma)){   
         System.out.println("\n");
         if( ns instanceof tiepThi){
          ((tiepThi)ns).ouput();                 
         }else if(ns instanceof chuongPhong){
          ((chuongPhong)ns).ouput();
         }else if(ns instanceof hanhchinh ){
          ((hanhchinh)ns).ouputNhanSu();
         }
         break;
       }
      }
    System.out.println(" ");
    }
  //ct4
   static void xoanhanVientheoMa(){
       boolean ok = false;
       System.out.print(" \n nhap ma nhan vien : ");
       String ma = input.nextLine();
       for(nhanSu ns : dsns){
           if(ns.ma.equalsIgnoreCase(ma)){
              ok = true;
              if( ns instanceof tiepThi){
               ((tiepThi)ns).ouput();                 
              }else if(ns instanceof chuongPhong){
               ((chuongPhong)ns).ouput();
              }else if(ns instanceof hanhchinh ){
               ((hanhchinh)ns).ouputNhanSu();
              }
              System.out.print("muon xoa ko c/k :");
              if(input.nextLine().equalsIgnoreCase("c")){
                 dsns.remove(ns);
              }
              break;
            }   
        }
        if(ok == true){
          System.out.println("xau khi xoa :");
          ouput();
        }else{
          System.out.println("khong tim thay nhan vien");
        }
        System.out.println(" ");
    }
//   ct 5
       static void capNhap(){
       boolean ok = false ;
       int vitri=-1;
       nhanSu nstam;
       System.out.print("nhap ma nhan vien can cap nhap :");
       String ma = input.nextLine();
       for(nhanSu ns: dsns ){
           vitri ++;
          if(ns.ma.equalsIgnoreCase(ma)){ 
               ok = true;
               if( ns instanceof tiepThi){
                  ((tiepThi)ns).ouput();                 
                }else if(ns instanceof chuongPhong){
                  ((chuongPhong)ns).ouput();
                }else if(ns instanceof hanhchinh ){
                  ((hanhchinh)ns).ouputNhanSu();
                }        
                System.out.println("nhap thong tin cam nhap :");
                if(ns instanceof hanhchinh){
                   ((hanhchinh) ns).input(); 
                }else if(ns instanceof  tiepThi){
                   ((tiepThi)ns).input();
                }else if(ns instanceof chuongPhong){
                   ((chuongPhong) ns).input();
                }
                break;
            }
        }
        if(ok == true){
            ouput();
        }else{
            System.out.println("khong tim thay nhan vien");
        }
         System.out.println(" ");
    }
//       ct 6
   static void searchKhoangLuong(){
       int stt=1;
       boolean ok = false;
       System.out.print("nhap luong nho nhat :");
       float min = Float.parseFloat(input.nextLine());
       System.out.print("nhap luong cao nhat :");
       float max = Float.parseFloat(input.nextLine());
       for(nhanSu ns:dsns ){
         if(max >= ns.getLuong()&&min <= ns.getLuong() ){
             System.out.println("\nstt :"+stt++);
             ok = true;
             if( ns instanceof tiepThi){
                ((tiepThi)ns).ouput();                 
            }else if(ns instanceof chuongPhong){
               ((chuongPhong)ns).ouput();
            }else if(ns instanceof hanhchinh ){
              ((hanhchinh)ns).ouputNhanSu();
            }  
         }
       }
       if(ok == false){
           System.out.println("khong tim thay nha su :");
       }
        System.out.println(" ");
   }   
//       ct 7
   static void xapSepTheoluong(){
       nhanSu a, b;
       Collections.sort(dsns, new Comparator<nhanSu>() {
           @Override
           public int compare(nhanSu a, nhanSu b) {
                return (int)(b.getLuong() - a.getLuong());
           }
       });
   }
//   8
   static void xapSepNhanVienTheoTen(){
       Collections.sort(dsns,(a,b)->a.ten.compareTo(b.ten));
       ouput();
     }
//   9
   static void top5NhanVien(){
       xapSepTheoluong();
       int stt=1;
       for(int i =0;i<5&& i < dsns.size();i++){
           System.out.println("\n stt :"+stt++);
           dsns.get(i).ouputNhanSu();
       }
       System.out.println(" ");
   }
}
