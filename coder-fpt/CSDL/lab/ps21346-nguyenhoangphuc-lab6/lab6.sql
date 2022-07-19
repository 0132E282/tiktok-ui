create database mssv;
use mssv;
create table mssv.khachhang(
MaKH varchar(10) not null,
HoVaTenLot varchar(50) ,
Ten varchar(50) not null,
DiaChi varchar(255),
Email varchar(50),
DienThoai varchar(20) not null,
primary key (MaKH)
);
create table mssv.nhanvien(
MaNV varchar(10) not null,
HoVaTenLot varchar(50) ,
Ten varchar(50) not null,
DiaChi varchar(255),
Email varchar(50),
DienThoai varchar(20) not null,
primary key (MaNV)
);
create table mssv.sanpham(
MaSP varchar(10) not null,
TenSP varchar(50) ,
GiaSP float not null,
SoLuong int not null,
MoTa varchar(255) not null,
primary key (MaSP)
);
create table mssv.hoadon(
MaHD varchar(10) not null,
NgayLapHD date not null,
TongTien float not null,
TrangThai varchar(20) not null,
MaNV varchar(10) not null,
MaKH varchar(10) not null,
primary key (MaHD)
);
create table mssv.HoaDonChiTiet(
MaHD varchar(10) not null,
MaSP varchar(10) not null,
SoLuongMua int not null,
primary key (MaHD, MaSP)
);
alter table mssv.hoadon
add constraint FK_HD1 foreign key (MaNV) references mssv.nhanvien(MaNV),
add constraint FK_HD2 foreign key (MaKH) references mssv.khachhang(MaKH);
alter table mssv.HoaDonChiTiet

add constraint FK_HDCT1 foreign key (MaHD) references mssv.hoadon(MaHD),
add constraint FK_HDCT2 foreign key (MaSP) references mssv.sanpham(MaSP);

insert into mssv.khachhang values 
('KH001', 'Trần Trọng', 'Trí', 'Gò Vấp', '', '0983456654'),
('KH002', 'Đàm Vĩnh', 'Hưng', 'Quận 3', '', '0988123567'),
('KH003', 'Châu Đăng', 'Khoa', 'Quận 1', '', '0977874300'),
('KH004', 'Phạm', 'Hương', 'Quận 2', '', '0903090932'),
('KH005', 'Trường', 'Giang', 'Bình Thạnh', '', '0933411154'),
('KH006', 'Hoài', 'Linh', 'Phú Nhuận', '', '0888012381'),
('KH007', 'Mỹ', 'Tâm', 'Quận 1', '', '0977456654'),
('KH008', 'Ưng Hoàng', 'Phúc', 'Quận 5', '', '091950064'),
('KH009', 'Châu Tinh', 'Trì', 'Quận 1', '', '0888456098'),
('KH010', 'Thành', 'Long', 'Quận 2', '', '0903090908'),
('KH011', 'Lý Liên', 'Kiệt', 'Tân Bình', '', '0933410054'),
('KH012', 'Châu Khải', 'Phong', 'Quận 1', '', '0888022411'),
('KH013', 'Vân Quang', 'Long', 'Quận 12', '', '0983456633'),
('KH014', 'Châu Việt', 'Cường', 'Quận 8', '', '0988903664'),
('KH015', 'Ngọc', 'Sơn', 'Quận 10', '', '0977766098'),
('KH016', 'Nguyễn Phi', 'Hùng', 'Quận 12', '', '0903098032'),
('KH017', 'Trịnh Thăng', 'Bình', 'Bình Thạnh', '', '0933477754'),
('KH018', 'Sơn', 'Tùng M-TP', 'Tân Phú', '', '0888029999'),
('KH019', 'Ngô Thanh', 'Vân', 'Tân Bình', '', '0983456890'),
('KH020', 'Trương Quỳnh', 'Anh', 'Quận 3', '', '0888053664'),
('KH021', 'Hoàng Thùy', 'Linh', 'Quận 1', '', '0977000098'),
('KH022', 'Tóc', 'Tiên', 'Quận 2', '', '0903090888'),
('KH023', 'Bích', 'Phương', 'Quận 1', '', '0933411010'),
('KH024', 'Thu', 'Minh', 'Quận 9', '', '0888022223');
insert into mssv.nhanvien values 
('NV001', 'Võ Đình', 'Hải', 'Gò Vấp', '', '0983769320'),
('NV002', 'Lý Minh', 'Khoa', 'Quận 3', '', '0933999100'),
('NV003', 'Vũ Phạm Minh', 'Châu', 'Quận 1', '', '0977333902'),
('NV004', 'Nguyễn Văn', 'Tuấn', 'Quận 2', '', '0903000021'),
('NV005', 'Lê Hoài', 'Bảo', 'Bình Thạnh', '', '0933488854'),
('NV006', 'Trần Duy Bảo', 'Long', 'Phú Nhuận', '', '0888022422');

insert into mssv.sanpham values 
('SP001', 'Samsung Galaxy Note 9', 20000000.0, 30, 'Hàng chính hãng'),
('SP002', 'IPHONE XS MAX', 30000000.0, 15, 'Hàng chính hãng'),
('SP003', 'IPHONE X', 20000000.0, 40, 'Hàng xách tay'),
('SP004', 'BPhone 3', 70000000.0, 300, 'Hàng chính hãng'),
('SP005', 'Oppo F9', 7000000.0, 50, 'Hàng chính hãng'),
('SP006', 'Samsung Galaxy S9 Plus', 18000000.0, 30, 'Hàng xách tay');

insert into mssv.hoadon values
('HD001', '2019-01-20', 20000000,'Đã thanh toán', 'NV004', 'KH003'),
('HD002', '2019-02-09', 27000000,'Chưa thanh toán', 'NV002', 'KH001'),
('HD003', '2019-01-22', 50000000,'Thanh toán qua thẻ', 'NV005', 'KH004'),
('HD004', '2019-02-03', 60000000,'Đã thanh toán', 'NV003', 'KH003'),
('HD005', '2019-01-29', 80000000,'Chưa thanh toán', 'NV003', 'KH005'),
('HD006', '2018-01-29', 30000000,'Chưa thanh toán', 'NV003', 'KH007'),
('HD007', '2018-01-29', 80000000,'Đã Thanh Toán', 'NV002', 'KH010'),
('HD008', '2018-01-29', 20000000,'Chưa thanh toán', 'NV003', 'KH001'),
('HD009', '2018-01-29', 10000000,'Đã Thanh Toán', 'NV003', 'KH006'),
('HD010', '2018-01-29', 10000000,'Chưa thanh toán', 'NV001', 'KH008'),
('HD011', '2018-01-29', 40000000,'Chưa thanh toán', 'NV002', 'KH009'),
('HD012', '2018-01-29', 50000000,'Đã Thanh Toán', 'NV005', 'KH002'),
('HD013', '2018-01-29', 20000000,'Đã thanh toán', 'NV001', 'KH003'),
('HD014', '2018-01-29', 30000000,'Đã thanh toán', 'NV003', 'KH011'),
('HD015', '2018-01-29', 70000000,'Đã thanh toán', 'NV002', 'KH015'),
('HD016', '2018-01-29', 80000000,'Chưa thanh toán', 'NV004', 'KH020'),
('HD017', '2018-01-29', 60000000,'Chưa thanh toán', 'NV004', 'KH021'),
('HD018', '2018-01-29', 90000000,'Chưa thanh toán', 'NV005', 'KH020'),
('HD019', '2018-01-29', 50000000,'Chưa thanh toán', 'NV001', 'KH003'),
('HD020', '2018-01-29', 40000000,'Chưa thanh toán', 'NV002', 'KH004'),
('HD021', '2018-01-29', 24000000,'Chưa thanh toán', 'NV003', 'KH009'),
('HD022', '2018-01-29', 12000000,'Chưa thanh toán', 'NV002', 'KH008'),
('HD023', '2018-01-29', 21000000,'Chưa thanh toán', 'NV003', 'KH016'),
('HD024', '2018-01-29', 22000000,'Chưa thanh toán', 'NV005', 'KH013'),
('HD025', '2018-01-29', 32000000,'Chưa thanh toán', 'NV004', 'KH011'),
('HD026', '2018-01-29', 19000000,'Chưa thanh toán', 'NV003', 'KH010'),
('HD027', '2018-01-29', 17500000,'Chưa thanh toán', 'NV001', 'KH001'),
('HD028', '2018-01-29', 12550000,'Chưa thanh toán', 'NV002', 'KH001'),
('HD029', '2018-01-29', 7000000,'Chưa thanh toán', 'NV001', 'KH002');

insert into mssv.hoadonchitiet values 
('HD001','SP001',1),
('HD002','SP003',1),
('HD002','SP004',1),
('HD003','SP002',1),
('HD003','SP003',1),
('HD004','SP001',3),
('HD005','SP002',2),
('HD005','SP003',1);
-- truy van
SELECT 
    hd.MaHD,
    NgayLapHD,
    TongTien,
    kh.MaKH,
    CONCAT(HoVaTenLot, '', Ten) AS hovaten
FROM
    khachhang kh,
    sanpham sp,
    hoadon hd,
    hoadonchitiet hdct
where 
    kh.MaKH = hd.MaKH and
    hd.MaHD = hdct.MaHD and
    hdct.MaSP = sp.MaSP;
-- 2
 select
     hd.MaHD,
     NgayLapHD,
     TongTien,
     CONCAT(HoVaTenLot,' ', Ten) AS hovatenNV
from 
    nhanvien nv,
    hoadonchitiet hdct,
    hoadon hd
where nv.MaNV = hd.MaNV 
and  hd.MaHD = hdct.MaHD;
-- 3
select MaHD , 
       NgayLapHD,
       TongTien,
       concat(nv.HoVaTenLot , ' ',nv.ten) as HoTenNV,
       concat(kh.HoVaTenLot , ' ' , kh.ten) as HoVaTenKH
from 
      hoadon hd ,
      nhanvien nv, 
      khachhang kh
where
      hd.MaNV = nv.MaNV and
      hd.MaKH = kh.Makh;
-- 4
SELECT 
    SUM(SoLuongMua) as TongKH,
    DiaChi
FROM
    khachhang
inner join hoadon
on hoadon.MaKH = khachhang.MaKH
inner join hoadonchitiet
 on hoadon.MaHD= hoadonchitiet.MaHD
group by (diachi); 
-- 5
select * from khachhang ,hoadon
where hoadon.MaKH = khachhang.MaKH ;

-- 6 
select
    MaHD, 
    NgayLapHD , 
    concat(kh.HoVaTenLot,'',kh.Ten) as HoVaTenKH ,
    concat(NV.HoVaTenLot,'',NV.Ten) as HoVaTenVN, 
    kh.DienThoai,
    TrangThai
from
    hoadon  ,
    nhanvien nv,
    khachhang kh
where 
     hoadon.MaKH = kh.MaKH and
     hoadon.MaNV = nv.MaNV and
     TrangThai = 'chưa thanh toán';
-- 7
select 
      hd.MaHD,
      NgayLapHD,
      SoLuong,
      TongTien,
      TenSP
from 
      hoadon hd
inner join khachhang kh
      on kh.MaKH = hd.MaKH
inner join hoadonchitiet
      on hd.MaHD = hoadonchitiet.MaHD
 inner join sanpham
      on sanpham.MaSP = hoadonchitiet.MaSP;
-- 8
SELECT hd.MaHD, NgayLapHD, TongTien,concat(HoVaTenLot ,' ',Ten) as ten, SoLuong,sp.MaSP, TenSP,DiaChi
from hoadon hd 
inner join khachhang kh
      on kh.MaKH = hd.MaKH
inner join hoadonchitiet hdct
      on hdct.MaHD = hd.MaHD
inner join sanpham sp
      on sp.MaSP = hdct.MaSP
where kh.DiaChi = 'Quận 1';
-- 9
select 
    hd.MaHD,
    NgayLapHD,
    TongTien,
    SoLuongMua,
    sp.MaSP,
    TenSP
from hoadon  hd
inner join hoadonchitiet hdct
on hdct.MaHD = hd.MaHD
inner join sanpham sp
on hdct.MaSP = sp.MaSP;
-- 10
select 
    hd.MaHD,
    NgayLapHD,
    TongTien,
    SoLuongMua,
    sp.MaSP,
    TenSP
from hoadon  hd
inner join hoadonchitiet hdct
on hdct.MaHD = hd.MaHD
inner join sanpham sp
on hdct.MaSP = sp.MaSP
where hd.MaKH in (select MaKH from khachhang where ten = 'khoa');