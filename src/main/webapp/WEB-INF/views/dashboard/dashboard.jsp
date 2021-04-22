<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>OO 커뮤니티 관리자 : 대시보드</title>

    <link rel="stylesheet" href="/resources/css/reset.css"/>
    <link rel="stylesheet" href="/resources/css/dashboard.css"/>

    <script src="http://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="/resources/js/member.js"></script>

</head>
<body>
    <div class="wrap">

        <div class="left_area">
            <h1>OO 커뮤니티</h1>
            <p>관리자 페이지</p>
            <div class="menu">
                <a href="#">회원 관리</a>
                <a href="#">게시판 관리</a>
            </div>
        </div>

        <div class="right_area">
            <h1>회원 관리</h1>

            <button id="add_member">회원 추가</button>

            <table class="members">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" id="checkAll">
                        </th>

                        <th>아이디</th>
                        <th>비밀번호</th>
                        <th>이름</th>
                        <th>메일</th>
                        <th>타입</th>
                        <th>등급</th>
                        <th>블로그</th>
                        <th>프로필이미지</th>
                        <th>소개</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                
                </tbody>

            </table>
        </div>
    </div>

    <div class="member_regist_modal">
        <div class="modal_content">

            <h1>사용자 생성</h1>
            
            <div class="input_row">
                <span>아이디</span>
                <input type="text" id="user_id">
            </div>

            <div class="input_row">
                <span>비밀번호</span>
                <input type="password" id="user_pwd">
            </div>
            
            <div class="input_row">
                <span>이름</span>
                <input type="text" id="user_name">
            </div>

            <div class="input_row">
                <span>이메일</span>
                <input type="text" id="user_email">
            </div>

            <div class="input_row">
                <button id="save">저장</button>
                <button id="cancel">취소</button>
            </div>

        </div>
    </div>
</body>
</html>