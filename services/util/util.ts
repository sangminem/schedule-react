import { DropdownDataProps } from "@/components/atoms/dropdown/dropdown.props";

const getDay = (date: string) => {
  var yyyyMMdd = getReformDate(date, "").substring(0, 8);
  var sYear = yyyyMMdd.substring(0, 4);
  var sMonth = yyyyMMdd.substring(4, 6);
  var sDate = yyyyMMdd.substring(6, 8);
  var targetDate = new Date(Number(sYear), Number(sMonth) - 1, Number(sDate));
  var week = ["일", "월", "화", "수", "목", "금", "토"];
  return week[targetDate.getDay()];
};


const getReformDate = (date: string, dvsn: string) => {
  let reformDate = date.replace("년", dvsn).replace("월",dvsn).replace("일"," ");
  reformDate = reformDate.replaceAll(".", dvsn);
  reformDate = reformDate.replaceAll("-", dvsn);
  if(dvsn === '-') reformDate = reformDate.substring(0, 10);
  if(dvsn === '.') reformDate = `${reformDate.substring(0, 10)} (${getDay(date)})`;
  return reformDate;
}

const getToday = () => {
  const dateArr = new Date().toLocaleDateString().replaceAll(" ", "").split(".");
  const today = dateArr[0] + "-" + ("0" + dateArr[1]).slice(-2, 3) + "-" + ("0" + dateArr[2]).slice(-2, 3);
  return today;
};

const getYearList = () => {
  const yearList: DropdownDataProps[] = [];
  const now = new Date();
  const year: number = now.getFullYear();
  for(let i=-5 ; i < 6; i++ ) {
    yearList.push({
      key: String(year + i),
      href: "#",
      label: String(year + i) + (i === -5? " 이전": "")
    });
  }
  yearList.reverse();
  return yearList;
}

const checkEmail = (email: string) => {
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  return emailRegEx.test(email);
};

const checkPassword = (password: string) => {
  const passwordRegEx = /^[A-Za-z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{6,20}$/;
  return passwordRegEx.test(password);
};

export { checkEmail, checkPassword, getDay, getReformDate, getToday, getYearList }