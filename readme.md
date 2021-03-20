# React 개념 파헤치기 프로젝트 !

##### 안녕하세요 웹뿌링클치킨이 아니라 웹뿌론트엔드가 되고싶은 삐약삐약 주니어치킨개발자 ABlued입니다!

이 저장소는 조현영 선생님의 인프런 웹 게임을 만들며 배우는 React 수업을 듣고 실습해본 코드를 저장하는 곳입니다!  

강의 링크 : https://www.inflearn.com/course/web-game-react

![화면 캡처 2021-03-19 204048](https://user-images.githubusercontent.com/53801395/111774951-78cc0880-88f3-11eb-8024-1d67753ec368.jpg)

##### 왜 우리는 제이쿼리가 아닌 리액트를 쓰는가?

+ 데이터와 화면 싱크를 맞추기 위해(ex: 페이스북의 좋아요를 누르면 화면이 새로고침되지 않고 좋아요 수가 바로 반영이 되는 것)
+ 컴포넌트화를 시킬 수 있고 이를 재활용할 수 있어서
+ 유지보수를 좀 더 쉽게 하기 위해
+ 앱과 비슷한 사용자경험을 웹에서 구현하기 위해

추가 설명 링크 : https://reactjs.org/

이 수업에 진행한 프로젝트
---

#### 1. 구구단 프로젝트
파일경로 : 1.gugudan -> index.html

중요 로직 코드  
```
 onSubmit = (e)=>{
                            e.preventDefault();
                            if(parseInt(this.state.value) === this.state.first * this.state.second){
                                this.setState({     
                                    result: '정답',
                                    first: Math.ceil(Math.random() * 9),
                                    second: Math.ceil(Math.random() * 9),
                                    value: '',
                                    solution: this.state.value,
                                });
                            } else {
                                this.setState({
                                    result: '땡',
                                    value: '',
                                    solution: '',
                                });
                            }
                    }
```
![처음화면](https://user-images.githubusercontent.com/53801395/111873763-5dd1c500-89d5-11eb-8621-01eec7708138.jpg)
  

프로젝트를 실행할 시 화면에 1~9까지 두 개의 수가 랜덤으로 나오며 입력값에 정답을 입력해야한다
  
  
![맞혔을 시](https://user-images.githubusercontent.com/53801395/111873764-5e6a5b80-89d5-11eb-9fe8-6de7f7677f7f.jpg)
  

정답을 입력했을 경우 두 개의 수가 다시 랜덤으로 나오며 다음 문제로 넘어간다.
  

![틀릴 시](https://user-images.githubusercontent.com/53801395/111873765-5f02f200-89d5-11eb-9807-0d200be87937.jpg)
  
  
오답을 입력했을 경우 문제를 틀렸다고 알림이 나오며 정답을 입력할때까지 이 과정이 반복된다.
