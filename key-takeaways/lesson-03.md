# Git
## 1. Undo
- Staging -> Working Directory for 1 file

    `git restore --staged <file_name>`
- Staging -> Working Directory for all files
   
    `git restore --staged .`

- Repository -> Working Directory (un-commit)
    
    Chiếc cốc - first in last out

    `git reset HEAD~N` 

    N : số lượng commit cần undo tính từ commit latest

Note: commit đầu tiên ko thể bị reset. Nếu muốn reset, xoá thư mục .git rồi init lại

## 2. Branching model
Dùng nhánh (branch) để tạo các phiên bản riêng của code, tránh ảnh hưởng tới "bản gốc"
Khi khởi tạo repo (git inti), nhánh mặc định sẽ được tạo ra (nhánh main)

`git config --global init.defaultBranch main`

- Xem danh sách nhánh (cần ít nhất 1 commit)

    `git branch`

- Tạo nhánh mới

    `git branch <ten_branch>`

    Nhánh mới copy giống hệt nhánh đang đứng hiện tại

- Chuyển sáng nhánh khác

    `git checkout <ten_branch>`

- Vừa tạo vừa chuyển sang nhánh mới

    `git checkout -b <ten_branch>`

- Xoá branch - cần đứng ở 1 branch khác

    `git branch -D <ten_branch>`

**Luôn pull code về trước khi tạo nhánh mới**
- Lấy code từ server về

    `git pull origin main`

## 3. Git ignore file
File `.gitignore` dùng để chỉ định những file và thư mục sẽ không được theo dõi (untracked) bởi Git

Trong project có 1 số file và thư mục không cần thiết phải đưa vào Git repository:

- File tạm thời của hệ điều hành: .DS_Store, Thumbs.db
- Thư mục dependencies: node_modules/, vendor/
- File build và artifacts: dist/, build/, *.exe
- File cấu hình cá nhân: IDE settings, environment variables
- File nhạy cảm: API keys, passwords, certificates
- File log và database local

### Cú pháp file .gitignore
- Comment - dòng bắt đầu bằng # là ghi chú
- Ignore file cụ thể

    `secret.txt`

- Ignore tất cả file có extension .log

    `*.log`

- Ignore thư mục

    `node_modules/`

- Ignore file trong mọi thư mục con

    `**/*.tmp`

- Ngoại lệ - KHÔNG ignore file này (dùng !)

    `!important.log`

- Ignore file chỉ ở thư mục gốc

    `/TODO`

- Ignore tất cả file .txt trong thư mục doc/

    `doc/**/*.txt`

## 4. Git Amend
 Sửa đổi (viết lại) commit gần nhất - thay đổi message (lỗi chính tả, thiếu thông tin); thêm/bớt file, hoặc cả 2
 
- Sửa commit message

    `git commit --amend -m "message mới"`

- Thêm file quên trên stage
    ```
    // Add file bị thiếu vào Staging
    git add file3.txt
    // Commit file này vào repository trong cùng commit trước đó mà không sửa tên commit
    git commit --amend --no-edit
    ```

- Vừa sửa tên file vừa sửa message
    ```
    // Add file bị thiếu vào Staging
    git add file4.txt
    // Commit file này vào repository trong cùng commit trước đó đồng thời sửa tên commit trước đó
    git commit --amend -m "feat: add file2, file3, file4"
    ```

- Bỏ file khỏi commit cuối
    ```
    git reset HEAD~ -- file_to_remove.py
    git commit --amend --no-edit
    ```

- Thay đổi author
    
    `git commit --amend --author="tên mới <email@moi.com>" --no-edit`

Note: Chỉ amend commit chưa push lên remote. Nếu đã push, amend sẽ gây conflict cho người khác



# Javascript Basic
## 1. Convention - quy tắc
Có nhiều loại convention: đặt tên file, đặt tên biến, đặt tên commit,...
Một số convention phổ biến:
- snake_case : tran_minh_nguyet

    tạm thời không dùng
- kebab-case : tran-minh-nguyet
    
    đặt tên file và folder
- camelCase : tranMinhNguyet

    đặt tên biến, hàm
- PascalCase : TranMinhNguyet

    đặt tên class
- SCREAMING_SNAKE_CASE (UPPER_CASE) : TRAN_MINH_NGUYET

    không dùng

## 2. Console log nâng cao
console.log('chuỗi');
console.log(`${variable_name}`);
console.log(`Toi la ${name}`);
console.log("Toi ten la " + name)

## 3. Object 
Dùng để lưu trữ dữ liệu dạng key-value

Cú pháp:

    const/let <variable_name> = {
        key1: value1,
        key2: value2,
        ...
    }
Trong đó:
- key : giống quy tắc đặt tên biến
- value : có kiểu giống biến, hoặc là 1 object khác

Ví dụ:

    const myInfo = {
        name: "Nguyet",
        favoriteNumber: 25,
        address: "Ha Noi",
        "my address 2": "Ha Tay",
        isLoveCodingg: true,
        codingClass: {
            name: "Playwright",
            level: "Beginner to Junior"
        }
    };

Khai báo:

    console.log(myInfo.name);
    console.log(myInfo.codingClass.name);
or
    
    console.log(myInfo["name"]);
    console.log(myInfo['codingClass']["name"]);

Gán lại:

    myInfo.address = "Da Nang"
    myInfo["codingClass"]["level"] = 1

## 4. Array
Tạo mảng:

    const arr = [3, 7, 9, 21, 54];

Lây phần tử theo index - tính từ 0:
    
    console.log(arr[3]);

Độ dài mảng:

    console.log(arr.length);

## 5. Function
Hàm: đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ or tính toán cụ thể

Khai báo:

    function <nameFunction>() {
        // code
    }

Parameter:

    function tinhDienTich(dai, rong) {
        const dienTich = dai * rong;
        // console.log(`Dien tich hinh chu nhat la: ${dienTich}`);
        return dienTich;
    }

    // tinhDienTich(5, 10);
    console.log(tinhDienTich(5, 10));

No parameter: 

    function xinChaoBaLan() {
        console.log("Xin chao");
        console.log("Xin chao");
        console.log("Xin chao");
    }