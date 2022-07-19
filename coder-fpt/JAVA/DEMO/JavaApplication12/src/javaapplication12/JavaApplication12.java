
package javaapplication12;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;
public class JavaApplication12 {
    static Scanner input = new Scanner(System.in);
    static ArrayList<sinhVien> dssv = new ArrayList<sinhVien>();
    public static void main(String[] args) {
        System.out.println("nhap danh sach sinh vien ");
         inputName();
        System.out.println("danh sach sinh vien");
        ouput();  
    }
    static void inputName(){
        do{
            sinhVien sv = new sinhVien();
            sv.input();
            dssv.add(sv);
            System.out.print("muon tiep  tuc k k/c :");
        }while(!input.nextLine().equalsIgnoreCase("k"));
    }
    static void ouput(){
     for( sinhVien sv : dssv){   
        sv.ouput();
    }
    }
     static void ouputTheoKhoang( ){
         float min ,max;
         int diem;
         System.out.print("so diem nho nhat :");
         min = input.nextFloat();
         System.out.print("so diem cao nhat :");
         max = input.nextFloat();
           Collections.sort(dssv,new Comparator<sinhVien>() {
               @Override
            public int compare(sinhVien o1, sinhVien o2) {
               return (int)(o1.getdiem() - o2.getdiem());
                     }
            });
         for(sinhVien sv : dssv){
             if(sv.getdiem() >= min && sv.getdiem() <= max){                 
                 sv.ouput();   
             }
         }
     }
     static void searchAndGet(){
         int viTri=-1;
         boolean ok=false;
         sinhVien svTam;
         System.out.print("nhap ten ");
         String hoTen = input.nextLine();
         for(sinhVien sv: dssv){
              viTri++;
           if(sv.getName().equalsIgnoreCase(hoTen)){
               sv.ouput();
               ok = true;
               System.out.print("nhap ten muon thay doi");
               String hoTen2 = input.nextLine();
               svTam = dssv.get(viTri);
               svTam.setName(hoTen2);
               dssv.set(viTri,svTam);
               sv.ouput();
           }
         }
         if(ok == false){
             System.out.println("khong tim thay sinh vien");
         }
     }
     
}
