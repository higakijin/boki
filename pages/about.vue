<template>
  <div>
    <Nav />
    <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
      <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
        <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">Got a Question? We’ve got answers.</p>
        <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">僕のボキとは？</h3>
        <div v-for="item in items" :key="item.id" class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
          <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">{{ item.question }}</h3>
          <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">{{ item.answer }}</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { question: '僕のボキって何?', answer: 'higakijinが運営する、簿記初学者のためのアウトプットツールです。簿記は独学が十分可能な分野ですが他の資格に比べ専門用語が多く、インプットだけではとても追いつきません。簿記に興味がある方、挑戦してみたけど挫折してしまった方、ぜひ私にご連絡ください！' },
        { question: '具体的に何をするの？', answer: 'テキストを指定するので、それを読んで自分なりの言葉でまとめ直していただきます。それを私が確認いたします。必ず疑問点が出てくるので、質問してもらってももちろんOKです！ 間違いがあれば指摘します！' },
        { question: 'テキストは何を使うの？', answer: 'よせだあつこさん著『パブロフ流でみんな合格 日商簿記』シリーズを使用します。3級、2級工業、2級商業に対応しています。(3級は現在準備中です)' },
        { question: '期間はどれくらい？', answer: '1日4時間勉強を毎日続けて3ヶ月を想定しています。もちろん人によってはそれよりも早く合格することもありますし、もっとかかることもあります。やる気と時間とテキストを用意していただければ最大限サポートします！' },
        { question: 'どんなプランがある？', answer: 'ベーシックプラン：1週間の体験コース、プラスプラン：1ヶ月980円コース、プロプラン：永久対応14,980円コースの3コースを用意しています。プロプランは3級から2級へのステップアップを目指している方におすすめです。' },
        { question: '契約したいんだけど？', answer: 'ありがとうございます! TwitterのDMでその旨お伝えください! 対応いたします!（アカウントは@higakijinです)' },
      ],
    }
  },
}
</script>
