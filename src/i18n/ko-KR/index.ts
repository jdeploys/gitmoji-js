// This is just an example,
// so you can safely delete all default props below

import { GitmojiCategory } from 'src/data/gitmojiData';

export default {
  failed: '실패',
  success: '성공',
  filter: '분류',
  category: {
    all: '모두',
    [GitmojiCategory.Code]: '코드 및 내부 변경',
    [GitmojiCategory.Style]: '보이는 내용 변경',
    [GitmojiCategory.Deploy]: '배포',
    [GitmojiCategory.Configuration]: '환경설정',
    [GitmojiCategory.Document]: '문서',
    [GitmojiCategory.Dependency]: '종속성(Dependency)',
    [GitmojiCategory.WorkOrIssue]: '일반적인 작업 또는 이슈',
    [GitmojiCategory.Etc]: '기타',
  },
  desc: {
    art: '코드 포맷, 구조 향상',
    zap: '성능 향상',
    fire: '코드 / 파일 삭제',
    bug: '버그 수정',
    ambulance: '핫픽스',
    sparkles: '새 기능',
    memo: '문서 변경',
    rocket: '배포(됨)',
    lipstick: 'UI, 스타일 추가 / 수정',
    tada: '프로젝트 시작',
    white_check_mark: '테스트 추가 / 수정',
    lock: '보안 작업',
    bookmark: '릴리즈 / 버전 태그',
    rotating_light: '컴파일러 또는 린터(linter) 경고 수정',
    construction: '작업 진행 중',
    green_heart: 'CI 빌드 고침',
    arrow_down: '디펜던시 다운그레이드',
    arrow_up: '디펜던사 업그레이드',
    pushpin: '디펜던시 버전 명세화(고정)',
    construction_worker: 'CI 빌드 시스템 추가 / 수정',
    chart_with_upwards_trend: '코드 분석 및 추정 추가/ 수정',
    recycle: '리팩토링',
    heavy_plus_sign: '디펜던시 추가',
    heavy_minus_sign: '디펜던시 제거',
    wrench: '환경 파일 추가 / 수정',
    hammer: '개발 스크립트 추가 / 수정',
    globe_with_meridians: '국제화 및 로컬화',
    pencil2: '오타 수정',
    poop: '개선해야되는 안좋은 코드가 작성됨',
    rewind: '이전으로 되돌림',
    twisted_rightwards_arrows: '브런치 병합됨',
    package: '컴파일된 패키지나 파일이 수정 / 추가됨',
    alien: '외부 API 변경으로 인해 코드가 업데이트됨',
    truck: '파일 이동 또는 이름 변경',
    page_facing_up: '라이선스 추가 / 수정',
    boom: '주요 변경사항 적용',
    bento: '에셋 추가 / 수정',
    wheelchair: '접근성 향상',
    bulb: '주석 추가 / 수정',
    beers: '술먹고 코딩',
    speech_balloon: '텍스트 수정',
    card_file_box: '데이터베이스 관련 변경',
    loud_sound: '로그 추가 / 수정',
    mute: '로그 제거',
    busts_in_silhouette: '기여자 추가 / 수정',
    children_crossing: '사용자 경험 및 사용성 향상',
    building_construction: '아키텍쳐 변경',
    iphone: '반응형 디자인 작업',
    clown_face: '목업 작업',
    egg: '이스터 에그 추가 / 수정',
    see_no_evil: '.gitignore 추가 / 수정',
    camera_flash: '스냅샷 추가 / 수정',
    alembic: '실험(실험적인 기능) 시도',
    mag: 'SEO 개선',
    label: '타입 추가 / 수정',
    seedling: '시드 파일 추가 / 수정',
    triangular_flag_on_post:
      '피쳐 플래그(특정 기능을 on/off 하는 기능) 추가 / 수정 / 삭제',
    goal_net: '오류 잡음(Catch)',
    dizzy: '애니메이션 또는 트랜지션 추가 / 수정',
    wastebasket: 'deprecated 코드 삭제',
    passport_control: '인증 / 권한 작업',
    adhesive_bandage: '크리티컬 하지 않은 간단한 이슈 고침',
    monocle_face: '데이터 탐색 / 검사',
    coffin: '죽은 코드 삭제',
  },
};