# i_generate_it_4_u

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
// 비밀번호 생성 버튼을 누르면 아래 조건이 뜸

WHEN prompted for password criteria
// password criteria를 시행하면
THEN I select which criteria to include in the password
// 어떤 요소를 포함할 지 선택할 수 있음

WHEN prompted for the length of the password
// 비밀번호 길이를 시행하면
THEN I choose a length of at least 8 characters and no more than 128 characters
// 8자부터 128자 사이에 선택

WHEN asked for character types to include in the password
// 글자 타입을 시행하면
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// lowercase, uppercase, numeric, special characters 포함 여부 결정

WHEN I answer each prompt
// 각 질문에 대답하면
THEN my input should be validated and at least one character type should be selected
// 내 대답이 validate 되고, 적어도 하나의 문자 종류가 선택 되어야 함

WHEN all prompts are answered
// 모든 질문에 대답이 끝나면
THEN a password is generated that matches the selected criteria
// 비밀번호가 생성됨

WHEN the password is generated
// 비밀번호가 생성되면
THEN the password is either displayed in an alert or written to the page
// 화면에 생성된 비밀번호가 기재되어야 함 

