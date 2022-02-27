<template>
  <div>
    <TopNav />

    <div class="text-gray-900 bg-gray-200">
      <div class="p-4 flex">
        <h1 class="text-3xl">Users</h1>
      </div>
      <div class="px-3 py-4 flex justify-center">
        <table class="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr class="border-b">
              <th class="text-left p-3 px-5">アイコン</th>
              <th class="text-left p-3 px-5">Name</th>
              <th class="text-left p-3 px-5">Email</th>
              <th class="text-left p-3 px-5">学習中のレベル</th>
              <th class="text-left p-3 px-5">会員ステータス</th>
              <th class="text-left p-3 px-5">最終支払日</th>
              <th class="text-left p-3 px-5">有効期限</th>
              <th class="text-left p-3 px-5">最終ログイン</th>
              <th class="text-left p-3 px-5">詳細</th>
            </tr>
            <tr class="border-b bg-gray-100">
              <td class="px-5"><img class="h-8" src="https://www.asahi-net.or.jp/~yq3t-hruc/img/USL.GIF" /></td>
              <td class="p-3 px-5">higakijin</td>
              <td class="p-3 px-5">hm385.chejptks@gmail.com</td>

              <td class="p-3 px-5">2級工業</td>
              <td class="p-3 px-5">プロ</td>
              <td class="p-3 px-5">2021.12.24</td>
              <td class="p-3 px-5">永久ライセンス</td>
              <td class="p-3 px-5">ログイン中</td>
              <td class="p-3 px-5 flex">
                <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Detail</button>
              </td>
            </tr>
            <tr class="border-b">
              <td class="px-5"><img class="h-8" src="https://m.media-amazon.com/images/I/31XDaI1437L._AC_SX355_.jpg" /></td>
              <td class="p-3 px-5">野生のミシシッピズワイガニ</td>
              <td class="p-3 px-5">waild.zuwai@kanikani.com</td>
              <td class="p-3 px-5">3級</td>
              <td class="p-3 px-5">プラス</td>
              <td class="p-3 px-5">2022.2.26</td>
              <td class="p-3 px-5">2022.3.26</td>
              <td class="p-3 px-5">3ヶ月前</td>
              <td class="p-3 px-5 flex">
                <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Detail</button>
              </td>
            </tr>
            <tr class="border-b bg-gray-100">
              <td class="px-5"><img class="h-8" src="https://www.asahi-net.or.jp/~yq3t-hruc/img/USL.GIF" /></td>
              <td class="p-3 px-5">hogehoge</td>
              <td class="p-3 px-5">hogehoge@foobar.com</td>

              <td class="p-3 px-5">2級商業</td>
              <td class="p-3 px-5">ベーシック</td>
              <td class="p-3 px-5">なし</td>
              <td class="p-3 px-5">なし</td>
              <td class="p-3 px-5">1日前</td>
              <td class="p-3 px-5 flex">
                <button type="button" class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
