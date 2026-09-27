# 1. Version Control System
Có 3 loại:
- **Local** : lưu ở máy cá nhân
- **Centralize** : lưu ở một máy chủ tập trung
- **Distributed** : lưu ở nhiều máy khác nhau (**phổ biến nhất hiện nay**)

# 2. Git
**Git** : một Distributed Version Control System (DVCS)

Cha đẻ của Git là Linux Torvalds (cha đẻ hệ điều hành Linux)

Git và GitHub

| Git | GitHub |
| --- | ------ |
| là 1 phần mềm | là 1 dịch vụ web |
| cài trên máy | host trên website |
| là 1 command line tool | là công cụ có giao diện |
| là công cụ quản lý phiên bản, đưa file vào Git repository | là nơi để upload Git repository lên |
| có các tính năng của Version Control System | có các tính năng của Version Control System và 1 số tính năng khác (GitHub Actions, GitHub Co-pilot) |

## Git - Three states
- Working directory : các file mới or file có thay đổi
- Staging Area : các file đưa vào vùng chuẩn bị commit (tạo ra các phiên bản)
- Repository : các commit (phiên bản)

## Git - Các câu lệnh
- git init : khởi tạo repo local

- git remote add origin <url> : tạo repo GitHub và liên kết tới repo local

- git add filename : đưa files mong muốn vào vùng staging

- git add . : thêm toàn bộ files modified vào staging

- git commit -m "message" : commit file

- git push origin main : push code

- git status : xem trạng thái file
    - green : vùng staging
    - red : vùng working directory

- git log : xem danh sách commit

## Git - Cấu hình
Đặt mặc định username và email cho toàn bộ các repo trên máy tính
- git config --global user.name "your name"
- git config --global user.email "your email"

Set username, password riêng trong từng repo (đứng tại terminal của repo đó)
- git config user.name "Moon"
- git config user.email "moontran104qn@gmail.com"

## Git - Commit convention
Quy tắc chung giúp cả team làm việc với nhau, code gọn gàng, sạch đẹp hơn, chuyên nghiệp hơn

**{type}: {short_description}**
- **chore**: sửa nhỏ lẻ, chính tả, xoá file không dùng tới,...
- **fea**t: thêm tính năng mới, test case mới
- **fix**: sửa lỗi 1 test trước đó


# 3. JavaScript Basic
Ra đời năm 1995 bởi Brendan Eich

### 1. Lệnh chạy code:
- node filename.js
- node folder/filename.js

### 2. Comment code (vô hiệu hoá code) : 
- // dòng code
- /* đoạn code */

### 3. Biến, hằng
Khai báo biến: <từ khoá> <tên biến> = <giá trị>

Từ khoá: var hoặc let 
- var cho phép khai báo lại, let thì không => nên sử dụng let để an toàn, tránh quên rằng đã khai báo trước đó, gây nhầm lẫn
- var có phạm vi global, let thì phạm vi theo block 

Khai báo hằng: <từ khoá> <tên hằng> = <giá trị>

Từ khoá: const

### 4. Data Type
- Kiểu nguyên thuỷ (preimitive types):
    - Number: số nguyên, số thực, Infinity (vô hạn), NaN (không phải là số)
    - String: "John", 'Hello', `Age` (dùng dấu backtick)
    - Boolean: true, false
    - Undefined
    - Null
    - Symbol
    - BigInt
- Kiểu tham chiếu (reference types)
    - Object
- Xem kiểu dữ liệu của 1 biến: typeof <tên biến>

### 5. Toán tử so sánh
So sánh 2 toán hạng => output dạng boolean
- So sánh bằng: 
    - == (Loose equality) đồng nhất type của 2 vế rồi so sánh giá trị
    - === (Strict equality) so sánh giá trị và kiểu, không đồng nhất kiểu của 2 vế
- So sánh không bằng: 
    - != : đồng nhất kiểu rồi so sánh giá trị
    - !== : so sánh vừa kiểu vừa giá trị
- So sánh lớn hơn, nhỏ hơn: >, <, >=, <=
- Luôn dùng ===, chỉ dùng == khi muốn so sánh mà không quan tâm kiểu dữ liệu

### 6. Toán tử logic
- && : and
- || : or

### 7. Toán tử một ngôi
Chỉ cần 1 toán hạng (số)
Example: x = 10
- Prefix: toán tử nằm trước - tăng trước, trả về sau
    - b = ++x => tăng x = 11 rồi trả b = 11
    - b = --x => x = 9 rồi trả b = 9
- Postfix: toán tử nằm sau - trả về trước, sau đó mới tăng
    - b = x++ => trả b = 10 trước, sau đó tăng x = 11
    - b = x-- => b = 10, x = 9

### 8. Toán tử toán học
+, -, *, /
Note: khi chia cho 0, sẽ ra kết quả infinity

### 9. Câu điều kiện
- if

```
if (<điều kiện>) {
    // code
}
```
- if...else
- if...else if...else
- switch...case

### 10. Vòng lặp
- for (i)
```
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>){
    // code
}
``` 
Điều kiện khởi tạo: chạy 1 lần duy nhất, khi vòng lặp bắt đầu

Điều kiện lặp: nếu đúng thì chạy code, sai thì dừng

Cập nhật: chạy vào mỗi cuối vòng lặp, để thay đổi giá trị của biến đếm
- for (of)
- for (each)
- for (in)
- while
- do...while


# 4. VSCode
Format code:
- Mac: Option + Shift + F
- Window: Alt + Shift + F





