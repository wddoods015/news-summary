/** src/utils/textUtils.ts
 * 텍스트 정제 관련 함수들
 */

// HTML 태그 제거
export const removeHTMLTags = (text: string): string => {
  if (!text) return '';
  return text.replace(/(<([^>]+)>)/gi, '');
};