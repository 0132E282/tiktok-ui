
package javaapplication4;

import java.util.Scanner;

public class sanPham {
    private String ten;
    private float gia;
    public void setTen(String ten){
        this.ten = ten;
    }
    public String getTen(){
        return ten;
    }
    public void setGia(float gia){
        this.gia = gia;
    }
    public float getGia(){
        return gia;
    }
    Scanner input =new Scanner(System.in);
    void inputSanPham(){
        System.out.print("nhap ten san pham :");
        ten = input.nextLine();
        System.out.print("nhap gia san pham :");
        gia = input.nextFloat();
    }
    void ouputSanPham(){
        System.out.println("ten san pham "+ten);
        System.out.println("gia san pham "+gia);
    }
}
