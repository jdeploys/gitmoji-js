<template>
  <q-timeline color="secondary">
    <q-timeline-entry heading>gitmoji 사용법</q-timeline-entry>
    <q-timeline-entry
      title="🎉 프로젝트 시작"
      subtitle="git commit 남길 때 사용법"
      icon="schedule"
      color="cyan"
    >
      <div>
        위 예제는 프로젝트 초기 설정을 하고 커밋하는 경우 위와 같이 작성해요.<br />
        일반적으로는 앞에 {gitmoji}를 달고 뒤에 해당 커밋에 대한 내용을
        작성해요.<br /><br />
        예 - {:gitmoji:} {commit message}<br />
        실제 - 📝 README 작성
      </div>
    </q-timeline-entry>
    <q-timeline-entry
      subtitle="여러가지 일을 한꺼번에 commit 한 경우"
      icon="done"
      color="light-blue"
    >
      <div>
        만약 하나에 커밋에서 여러 일을 했다고 가정해볼게요.<br />
        커밋 메시지는 아래와 같이 작성하고,<br />
        커밋 내에서 중요도가 가장 높은 것 순으로 정리하면 좋아요.<br />
        <ul class="q-mt-md">
          <li>💄 테마 색 변경</li>
          <li>🐛 잘못된 파라미터 값 사용으로 인한 문제 수정</li>
          <li>♻️ 로그 관련 코드 리팩토링</li>
        </ul>
      </div>
    </q-timeline-entry>
    <q-timeline-entry
      subtitle="Pull Request 사용법"
      icon="upgrade"
      title="[ISSUE-1] ✨ 반짝 반짝 새 기능 검토 요청"
      color="purple"
    >
      <div>
        ISSUE-1 에서 새 기능을 만들었어요!<br />
        하나 기능을 만들기 위해 보통 여러개의 커밋을 아래와 같이 작성하게
        되죠.<br />
        <ul class="q-my-md">
          <li>✨ 반짝 반짝 새 기능</li>
          <li>⚡ 처리 능력 향상</li>
          <li>👽️ 새 기능 업데이트로 인한 외부 API 변경 대응</li>
        </ul>
        <div>
          Pull Request 제목에 여러개의 gitmoji 를 달지 말고 가장 대표하는
          gitmoji 하나를 달아주세요.
          <q-tooltip>
            자세한 이력은 커밋 이력에 gitmoji 가 표시되기 때문에 여러개의 gitmoji 를 다시 작성할
            필요가 없어요!
          </q-tooltip>
        </div>
        <div class="q-mt-md">
          잘못된 예 - [ISSUE-1] ✨⚡👽️ 반짝 반짝 새 기능 검토 요청<br />
          올바른 예 - [ISSUE-1] ✨ 반짝 반짝 새 기능 검토 요청
        </div>
      </div>
    </q-timeline-entry>
    <q-timeline-entry
      subtitle="gitmoji 사용법"
      icon="favorite"
      title="다 됐습니다 👏 이제 직접 사용해보세요! 🎉"
      color="pink"
    >
    </q-timeline-entry>
  </q-timeline>
</template>
