
package de1;

import java.util.Scanner;

public class sinhVien {
    Scanner input = new Scanner(System.in);
    private String ten ;
    private double diem;
    private String ma;

    public sinhVien() {
    }

    public sinhVien(String ten,  String ma,double diem) {
        this.ten = ten;
        this.ma = ma;
        this.diem = diem;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public double getDiem() {
        return diem;
    }

    public void setDiem(double diem) {
        this.diem = diem;
    }

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }
    public void nhap(){
     ten = input.nextLine();
     ma = input.nextLine();
     diem = input.nextDouble();
    }
    public void Xuat(){
     System.out.println("ten :"+ten);
     System.out.println("ma :"+ma);
     System.out.println("diem :"+diem);     
    }
}
