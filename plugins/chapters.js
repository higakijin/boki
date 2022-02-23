const secondIndustrialChapters = [
  {
    id: 1,
    title: '工業簿記とは',
    lessons: [
      { id: 1, title: '工業簿記とは' },
      { id: 2, title: '工業簿記の全体の流れ' },
      { id: 3, title: '原価計算とは' },
      { id: 4, title: '仕掛品と製品' },
    ],
  },
  {
    id: 2,
    title: '材料費',
    lessons: [
      { id: 1, title: '直接材料費と間接材料費' },
      { id: 2, title: '材料勘定の記入' },
      { id: 3, title: '材料の消費単価' },
      { id: 4, title: '材料の消費数量' },
      { id: 5, title: '棚卸減耗費' },
      { id: 6, title: '予定消費単価' },
    ],
  },
  {
    id: 3,
    title: '労務費',
    lessons: [
      { id: 1, title: '直接労務費と間接労務費' },
      { id: 2, title: '賃率勘定の記入' },
      { id: 3, title: '予定賃率' },
    ],
  },
  {
    id: 4,
    title: '経費',
    lessons: [
      { id: 1, title: '直接経費と間接経費' },
      { id: 2, title: '賃金勘定の記入' },
    ],
  },
  {
    id: 5,
    title: '製造間接費とは',
    lessons: [
      { id: 1, title: '製造間接費とは' },
      { id: 2, title: '予定配賦率とは' },
      { id: 3, title: '予定配賦率の原価差異の分析' },
    ],
  },
  {
    id: 6,
    title: '勘定の記入と財務諸表',
    lessons: [
      { id: 1, title: '勘定記入のまとめ' },
      { id: 2, title: '製造原価報告書' },
      { id: 3, title: '損益計算書と貸借対照表' },
      { id: 4, title: '原価差異がある場合の財務諸表' },
    ],
  },
  {
    id: 7,
    title: '製造間接費の部門別計算',
    lessons: [
      { id: 1, title: '製造間接費の第一次集計（部門個別費と部門共通費）' },
      { id: 2, title: '製造間接費の第二次集計（直接配賦法と相互配賦法）' },
      { id: 3, title: '製品への配賦（実際配賦と予定配賦）' },
    ],
  },
  {
    id: 8,
    title: '個別原価計算',
    lessons: [
      { id: 1, title: '個別原価計算とは' },
      { id: 2, title: '製造指図書と原価計算表' },
      { id: 3, title: '個別原価計算（仕損品）' },
      { id: 4, title: '原価計算表と勘定元帳との関係' },
      { id: 5, title: '個別原価計算（仕訳）' },
    ],
  },
  {
    id: 9,
    title: '総合原価計算１',
    lessons: [
      { id: 1, title: '総合原価計算とは' },
      { id: 2, title: '仕掛品の解き方' },
      { id: 3, title: '仕掛品の計算（先入先出法）' },
      { id: 4, title: '仕掛品の計算（平均法）' },
      { id: 5, title: '材料の追加投入（作業の途中に投入）' },
      { id: 6, title: '材料の追加投入（平均的に投入）' },
    ],
  },
  {
    id: 10,
    title: '総合原価計算２',
    lessons: [
      { id: 1, title: '仕損と減損とは' },
      { id: 2, title: '仕損１完成品原価に含めて処理' },
      { id: 3, title: '仕損２完成品原価と月末仕掛品原価に含めて処理' },
      { id: 4, title: ' 仕損３発生点が不明の場合' },
      { id: 5, title: '副産物と作業屑' },
    ],
  },
  {
    id: 11,
    title: '総合原価計算の種類',
    lessons: [
      { id: 1, title: '工程別総合原価計算' },
      { id: 2, title: '組別総合原価計算' },
      { id: 3, title: '等級別総合原価計算' },
    ],
  },
  {
    id: 12,
    title: '標準原価計算',
    lessons: [
      { id: 1, title: '標準原価計算とは' },
      { id: 2, title: '標準原価計算カード' },
      { id: 3, title: 'シングル・プラン' },
      { id: 4, title: 'パーシャル・プラン' },
      { id: 5, title: '原価差異の分析とは' },
      { id: 6, title: '原価差異の分析（材料費）' },
      { id: 7, title: '原価差異の分析（労務費）' },
      { id: 8, title: '原価差異の分析（製造間接費）' },
      { id: 9, title: '実際原価計算の原価差異の分析' },
    ],
  },
  {
    id: 13,
    title: '直接原価計算',
    lessons: [
      { id: 1, title: '直接原価計算とは' },
      { id: 2, title: 'CVP分析（基礎）' },
      { id: 3, title: 'CVP分析（応用）' },
      { id: 4, title: 'CVP分析（損益分岐点比率と安全余裕率）' },
      { id: 5, title: '直接原価計算の損益計算書' },
      { id: 6, title: '固定費調整' },
    ],
  },
  {
    id: 14,
    title: '本社工場会計',
    lessons: [
      { id: 1, title: '本社工場会計とは' },
      { id: 2, title: '本社と工場の仕訳' },
    ],
  },
]

export default ({}, inject) => {
  inject('secondIndustrialChapters', secondIndustrialChapters)
}
