/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package asm;
  
public class hanhchinh extends nhanSu {
  float luong; 

    public hanhchinh(float luong) {
        this.luong = luong;
    }

    public hanhchinh( String ten, String chucVu, String ma,float luong) {
        super(ten, chucVu, ma);
        this.luong = luong;
    }
  
    public hanhchinh() {
    }

    @Override
    float getLuong() {
        return luong; 
    }
    public  void input(){
     System.out.print("nhap Luong :");
     luong=input.nextFloat();
     input.nextLine();
    }
}
