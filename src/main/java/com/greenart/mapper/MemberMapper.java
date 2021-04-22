package com.greenart.mapper;
import java.util.List;

import com.greenart.vo.AdminVO;
import com.greenart.vo.LoginVO;
import com.greenart.vo.MemberVO;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    public AdminVO selectAdmin(LoginVO vo);
    public List<MemberVO> selectMembers();
    public void insertMember(MemberVO vo);
    public Integer selectUserById(LoginVO vo);
	public void deleteUser(Integer seq);
}
