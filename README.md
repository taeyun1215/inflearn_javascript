# Javascript

### Javascript 기본 문법

### 1. 변수

- 변수(Variable)는 값(value)을 저장(할당)하고 그 저장된 값을 참조하기 위해 사용한다.
- 변수를 선언할 때 var 키워드를 사용한다. 할당 연산자 =는 변수에 값을 할당하기 위해 사용한다.
    
    ```jsx
    var x; // 변수의 선언
    x = 6; // 정수값의 할당
    ```
    
    ```jsx
    var a;
    var b = 123;
    var c = "123";
    var d = false;
    var e = null;
    ```
    
- 최신 자바스크립트에선 let이라는 가변형 블럭 지역 변수와 const라는 불변형 블럭 지역 변수가 추가되었다.
    
    ```jsx
    let x = 123;
    x = "123";
    
    const y = false;
    y = null; // error
    ```
    

### 2. 연산자

- +, -, *, /, % 등의 기본 연산은 물론 ++, --와 같은 증감 연산자도 사용할 수 있다.
    
    ```jsx
    a = a + 1 (x)
    a += 1 (o)
    ```
    
- 자바스크립트에서 a = a + 1 과 같은 표현은 쓰지 말라고 돼있다.
    - [ ]  안되는 이유 확인하기
- 자바스크립트는 자바와 마찬가지로 스트링 컨케트네이션이 되므로 문자열을 덧셈기호로 간단히 붙힐 수 있다.
    
    ```jsx
    var s = "String1" + "String2";
    console.log(s); // String1String2
    ```
    

### 3. 조건문

- ==, !=, &&, ||, >, < 등의 논리 연산자, 비교 연산자를 사용하여 조건문을 만들수 있다.
    
    ```jsx
    a==b
    a!=b
    a==b && a==c
    a==b || a==c
    a > b
    ```
    
    - if 문
        
        ```jsx
        if (a > b) {
            console.log("a is more than b.")
        } else if (a == b) {
            console.log("a is the same as b.")
        } else {
            console.log("a is less than b.")
        }
        ```
        
    - switch 문
        
        ```jsx
        const country= "korea";
        
        switch(country) {
        		case "korea":
        				console.log("한국 입니다.")
        		case "USA":
        				console.log("미국 입니다.")
        		default:
        				console.log("조회되는 나라가 없습니다.")
        }
        ```
        

### 4. 반복문

- while 반복문
    
    ```jsx
    let temperature = 20
    while (temperature < 25) {
    		console.log(`${temperature} 온도입니다.`);
    		temperature++ // 증감연산자를 활용해서 온도를 변화시킴.
    }
    
    console.log(`마지막 온도 ${temperature}`);
    ```
    
- for 반복문
    
    ```jsx
    for (let i = 5; i <10 ; i++) { 
    		console.log(`온도는 ${i}도 입니다.`);
    }
    ```
    

### 5. 함수

- 함수의 선언
    
    ```jsx
    function 함수명(매개변수) { 
    	  이 함수에서 실행할 코드
    		return 반환값
    }
    ```
    
- 함수의 호출
    
    ```jsx
    const priceA = 1000;
    const priceB = 2000;
    
    // 함수의 호출
    const avg1 = avg(priceA, priceB)
    console.log(`두 평균은 ${avg1}입니다.`);
    
    function avg(price1, price2) {
    		const sum = price1 + price2; // 매개변수인 price1, price2을 변수처럼 활용!
    		console.log(`합계는 ${sum}입니다.`);
    		const avg = sum / 2;
    		return avg; // 평균가격을 리턴!
    }
    ```
    

### 6. 클래스와 객체

1. 클래스 선언
- 클래스를 미리 정의해놓으면 필요할 때마다 그 클래스의 구성을 사용할 수 있다.
    
    ```jsx
    class People {
    	  constructor(name, age) {
    		    this.name = name;
    		    this.age= age;
        }
    }
    ```
    
    - class 키워드와 클래스명
    - 생성자(Constructor)
        - 중괄호 안에는 생성자를 적는다. 객체가 생성이 될 때마다 자바스크립트 내부에서 호출이 되는 함수.
    - this 와 객체의 속성
        - 여기서 this란 People 자체를 가르킨다.
        - this 뒤에 붙는 name, age는 객체의 속성이다.
1. 객체 만들기
- const 변수명 = new 클래스명(생성자에서 정의한 매개변수들)
    
    ```jsx
    const people1 = new People('LEE', 27);
    ```
    
- 객체 속성 사용하기
    
    ```jsx
    console.log(people1); // People { name: 'LEE', age: 27 } 
    console.log(people1.name); // LEE
    consoel.log(people1.age); // 27
    ```
    

### 7. 클래스 메소드, 객체 리터럴

1. 클래스 메소드
- 함수와 같이 특정 코드를 실행할 수 있는 메소드를 정의할 수 있음.
- 객체를 생성후, 만들어진 객체의 메소드를 호출하면 됨.
    
    ```jsx
    // 클래스 선언
    class Product {
        constructor(name, price) {
        this.name = name
        this.price = price
        }
    
        printInfo() {
    		    console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
        }
    }
    
    // 객체 생성 및 메소드 호출
    const notebook = new Product('Apple Macbook', 2000000)
    notebook.printInfo() // 상품명: Apple Macbook, 가격: 2000000원
    ```
    
1. 객체 리터럴
- 객체 리터럴을 활용해서 바로 객체를 만들 수 있다.
- 객체 리터럴은 클래스와 같은 템플릿 없이 빠르게 객체를 만들 수 있는 방법이다.
    
    ```jsx
    const 변수명 = {
    		속성명: 데이터,
    		메소드명: function () { 메소드 호출시 실행할 코드들 }
    }
    ```
    
    ```jsx
    const computer = {
        name: 'Apple Macbook',
        price: 20000,
        printInfo: function () {  //메소드
    	      console.log(`상품명: ${this.name}, 가격: ${this.price}원`)
        }
    }
    
    computer.printInfo()
    ```
    

### 8.배열

- 배열의 선언
    
    ```jsx
    // 1번째 방법
    const arr1 = new Array(1, 2, 3, 4, 5)
    
    // 2번째 방법
    const arr2 = [1, 2, 3, 4, 5]
    ```
    
    - 주로 두번째 방법을 사용함.
- 배열의 요소(Index)
    
    ```jsx
    const name = ['Kim', 'Lee', 'Park']
    
    console.log(name[0]) // Kim
    console.log(name[1]) // Lee
    console.log(name[2]) // Park
    ```
    
- 배열의 길이(Length)
    
    ```jsx
    const name = ['Kim', 'Lee', 'Park']
    console.log(name.length) // 3을 출력
    console.log(name[Colors.length - 1]) // yellow 출력
    ```
    
- 배열의 요소 추가, 삭제(Push, Pop)
    
    ```jsx
    const name = ['Kim', 'Lee', 'Park']
    
    name.push('Nav') // 배열의 마지막에 Nav 추가
    console.log(name) // 결과 Kim Lee Park Nav
    
    name.pop() // 배열의 마지막 요소 Nav을 제거
    console.log(name ) // 결과 Kim Lee Park
    ```
    
- 배열 반복문
    
    ```jsx
    const names = ['Kim', 'Lee', 'Park']
    
    for (const name of names) {
    		console.log(name)
    }
    ```
