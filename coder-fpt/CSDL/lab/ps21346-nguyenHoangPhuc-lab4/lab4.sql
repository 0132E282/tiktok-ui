create database batdongsan;
use batdongsan;
 create table vanPhong (
    maVP int  primary  key,
    diaChi varchar(255) not null,
    maCP int not null
);

create table nhanVien(
   maNV int not null primary key,
   tenNV varchar(50),
   maVP  int not null ,
   foreign key (maVP) references vanPhong(maVP)
);
create table thanNhan(
   maTN int primary key,
   tenTN varchar(50),
   ngaySinh date ,
   moiQH varChar(60),
   maNV int not null,
   foreign key (maNV) references nhanVien(maNV)
);
create table bds(
   maBDS int not null primary key,
   diaChi varchar(255),
   machubds int ,
   mavp int,
   foreign key (mavp) references vanPhong (maVP)
);
alter table bds add  foreign key (machubds) references chubds (machubds);
create table chubds(
  machubds int not null primary key,
  diaChi varchar(255),
  sdt int
);