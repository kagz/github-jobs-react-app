import styled from 'styled-components';
import { FcOvertime } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';
import { Link } from 'react-router-dom';
import {
	Image,
} from 'react-bootstrap';

export const MainBody = styled.div`
	color: #b7cbd9;
	min-height: 100vh;
	border-radius: 5px;
`;

export const MainCard = styled.div`
	padding: 20px;
	border-radius: 5px;
	background: #100e17;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	margin: 7px;
`;

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #75062b;
`;

export const CardBox = styled.div`
	background-color: #222121;
	padding: 20px;
	margin-bottom: 20px;
	width: 100%;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(27, 27, 27, 0.5);
`;

export const StyledLink = styled(Link)`
	color: inherit;
	&:hover {
		text-decoration: none;
		color: inherit;
	}
`;

export const CompanyDetail = styled.div`
	width: 100%;
	text-align: center;
	border-bottom: 1px solid #696565;
	margin-bottom: 3px;
`;

export const CompanyLogo = styled(Image)`
	height: 98px;
	width: 98px;
`;

export const JobDescription = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	overflow: hidden;
  text-overflow: ellipsis;
`;

export const JobLocation = styled.ul`
	display: flex;
	padding: 0;
	list-style:none;
`;

export const TimeIcon = styled(FcOvertime)`
	font-size: 20px;
`;

export const LocIcon = styled(GoLocation)`
	font-size: 20px;
`;

export const ClickButton = styled.span`
	display: inline-block;
	background: #044902;
	padding: 0.45em 1em;
	width: 100%;
	text-align: center;
	border-radius: 5px;
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.2px;
	font-size: 17px;
	&:hover {
		background: #097205;
	}
`;

export const JobTitle = styled.h5`
	color: #b5143d;
  font-size: larger;
`;

export const StyledPagination = styled.div`
	display: flex;
	justify-content: center;
	padding-top: 8px;
`;

export const MobileSearch = styled.div`
	display: flex;
	justify-content: flex-end;
`;
