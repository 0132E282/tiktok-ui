
package baithi;

import java.util.Scanner;

 public abstract class conNguoi {
    String ten ;
    int namSinh;
    
    public conNguoi() {
    }

    public conNguoi(String ten, int namSInh) {
        this.ten = ten;
        this.namSinh = namSInh;
    }
    Scanner input = new Scanner(System.in);
    void nhap(){
      System.out.print("nhap ten : ");
      ten= input.nextLine();
      System.out.print("nhap nam sinh: ");
      namSinh = Integer.parseInt(input.nextLine());
    }
    void xuat(){
      System.out.println("ten : "+ten);
      System.out.println("ten : "+namSinh);
    }
}
