/** src/utils/textUtils.ts
 * 텍스트 정제 관련 함수들
 */

// HTML 태그, 엔티티 제거
export const removeHTMLTags = (text: string): string => {
  if (!text) return '';

  // HTML 태그 제거 함수
  const withoutTags = text.replace(/(<([^>]+)>)/gi, '');

  // HTML 엔티티 제거 함수
  const withoutEntities = withoutTags
    .replace(/&quot;/g, '"')     // 큰따옴표
    .replace(/&apos;/g, "'")     // 작은따옴표
    .replace(/&lt;/g, '<')       // 작다 기호
    .replace(/&gt;/g, '>')       // 크다 기호
    .replace(/&amp;/g, '&')      // 앰퍼샌드
    .replace(/&nbsp;/g, ' ')     // 공백
    
    // 숫자 엔티티 제거 (예: &#34;)
    .replace(/&#\d+;/g, '');
    
  return withoutEntities;
};