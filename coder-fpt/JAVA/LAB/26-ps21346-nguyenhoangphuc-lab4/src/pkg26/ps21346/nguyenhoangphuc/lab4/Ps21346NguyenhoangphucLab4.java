/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package pkg26.ps21346.nguyenhoangphuc.lab4;

/**
 *
 * @author nguye
 */
public class Ps21346NguyenhoangphucLab4 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
 
      sanPham1();
      sanPham2();
      sanPham3();
    }
    public static void sanPham1(){
     sanPham sp =  new sanPham();
      sp.getSanPHam("sua chua");
      sp.gia(10000);
      sp.giam(1000);
      sp.ouputSanPham();
    }
    public static void sanPham2(){
     sanPham sp1 = new sanPham();
     sanPham sp2 = new sanPham();
     sp1.inputSanPham();
     sp2.inputSanPham();
     System.out.println("thong tin san pham");
     sp1.ouputSanPham();
     System.out.println("thong tin san pham");
     sp2.ouputSanPham();
    }
    public static void sanPham3(){
        sanPham sp3 =new sanPham("sua chu",70000);
        sp3.inputSanPham();
        sp3.ouputSanPham1();
    }
}
