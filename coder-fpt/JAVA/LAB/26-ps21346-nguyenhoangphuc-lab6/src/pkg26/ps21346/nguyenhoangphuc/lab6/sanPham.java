/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package pkg26.ps21346.nguyenhoangphuc.lab6;

import java.util.Scanner;

public class sanPham {
    private String ten;
    private String hang;
    private float gia;

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getHang() {
        return hang;
    }

    public void setHang(String hang) {
        this.hang = hang;
    }

    public float getGia() {
        return gia;
    }

    public void setGia(float gia) {
        this.gia = gia;
    }
    Scanner input = new Scanner(System.in);
    void inputSanPham(){
        System.out.print("nhap ten :");
        ten = input.nextLine();
        System.out.print("nhap hang :");
        hang = input.nextLine();
        System.out.print("nhap gia :");
        gia = input.nextFloat();
    }
    void ouputSanPham(){
        System.out.println("ten san pham :"+ten);
        System.out.println("hang san pham :"+hang);
        System.out.println("gia san pham :"+gia);
    }
}
