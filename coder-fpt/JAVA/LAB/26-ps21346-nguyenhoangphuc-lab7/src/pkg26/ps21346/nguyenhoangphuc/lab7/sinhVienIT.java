
package pkg26.ps21346.nguyenhoangphuc.lab7;

import java.util.Scanner;

public class sinhVienIT extends sinhVien {
    Scanner input = new Scanner(System.in);
    float html,css,java;

    public sinhVienIT() {
        
    }
    
    public sinhVienIT(float html, float css, float java) {
        this.html = html;
        this.css = css;
        this.java = java;
    }   
    public sinhVienIT(String ten,String nganh ,float html, float css, float java) {
        super(nganh,ten);
        this.html = html;
        this.css = css;
        this.java = java;
    }
    @Override
    public float getdiem(){
      return (this.java+this.html+this.java*2) / 4;   
    }
    @Override
    float getmon() {
        if(html < css&& html < java){
        return html;
        }else if( css < html && css < java){
         return css;   
        } 
        return java;
    }
    void inputSinhVienIT(){
        float diem;
        System.out.println("nhap thong tinh sinh vien IT");
        do{
        System.out.print("nhap diem html :");
        html =input.nextFloat();
        diem = html;
        if(diem < 0 || diem >10){
          System.out.println("nhap Sai Nhap lai" );
        }
        }while(diem <0 || diem >10);
        do{
        System.out.print("nhap diem css :");
        css =input.nextFloat();
        diem = css;
        if(diem < 0 || diem >10){
          System.out.println("nhap Sai Nhap lai");
        }
        }while(diem <0 || diem >10);
        do{
        System.out.print("nhap diem java :");
        java=input.nextFloat();
        input.nextLine();
        diem = java;
        if(diem < 0 || diem >10){
          System.out.println("nhap Sai Nhap lai");
        }
        }while(diem <0 || diem >10);
    }

 

}

