ItemEvents.tooltip(allthemods => {
 //pipes
 allthemods.add('pipez:item_pipe', [
    [Text.of('預設：'), ' ', Text.of('4'), ' ', Text.of('物品/20t')],
    [Text.of('基礎：'), ' ', Text.of('8'), ' ', Text.of('物品/15t')],
    [Text.of('中級：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('物品/10t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('物品/5t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('物品/t').darkGray()]
  ])
  allthemods.add('pipez:fluid_pipe', [
    [Text.of('預設：'), ' ', Text.of('50'), ' ', Text.of('mB/t')],
    [Text.of('基礎：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('中級：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
  ])
  allthemods.add('pipez:gas_pipe', [
    [Text.of('預設：'), ' ', Text.of('200'), ' ', Text.of('mB/t')],
    [Text.of('基礎：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('中級：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()]
  ])
  allthemods.add('pipez:energy_pipe', [
    [Text.of('預設：'), ' ', Text.of('256'), ' ', Text.of('FE/t')],
    [Text.of('基礎：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
    [Text.of('中級：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
    [Text.of('高級：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
    [Text.of('終極：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()]
  ])

  //upgrades
  allthemods.add('pipez:basic_upgrade', [
    [Text.of('物品：'), ' ', Text.of('8'), ' ', Text.of('物品/15t')],
    [Text.of('流體：'), ' ', Text.of('100'), ' ', Text.of('mB/t')],
    [Text.of('氣體：'), ' ', Text.of('400'), ' ', Text.of('mB/t')],
    [Text.of('能量：'), ' ', Text.of('1,024'), ' ', Text.of('FE/t')],
  ])
  allthemods.add('pipez:improved_upgrade', [
    [Text.of('物品：').gold(), ' ', Text.of('16').yellow(), ' ', Text.of('物品/10t').gold()],
    [Text.of('流體：').gold(), ' ', Text.of('500').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('氣體：').gold(), ' ', Text.of('2,000').yellow(), ' ', Text.of('mB/t').gold()],
    [Text.of('能量：').gold(), ' ', Text.of('8,192').yellow(), ' ', Text.of('FE/t').gold()],
  ])
  allthemods.add('pipez:advanced_upgrade', [
    [Text.of('物品：').darkAqua(), ' ', Text.of('32').aqua(), ' ', Text.of('物品/5t').darkAqua()],
    [Text.of('流體：').darkAqua(), ' ', Text.of('2,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('氣體：').darkAqua(), ' ', Text.of('8,000').aqua(), ' ', Text.of('mB/t').darkAqua()],
    [Text.of('能量：').darkAqua(), ' ', Text.of('32,768').aqua(), ' ', Text.of('FE/t').darkAqua()],
  ])
  allthemods.add('pipez:ultimate_upgrade', [
    [Text.of('物品：').darkGray(), ' ', Text.of('64').gray(), ' ', Text.of('物品/t').darkGray()],
    [Text.of('流體：').darkGray(), ' ', Text.of('10,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('氣體：').darkGray(), ' ', Text.of('40,000').gray(), ' ', Text.of('mB/t').darkGray()],
    [Text.of('能量：').darkGray(), ' ', Text.of('131,072').gray(), ' ', Text.of('FE/t').darkGray()],
  ])

  // Mob Grinding Utils
  allthemods.addAdvanced('mob_grinding_utils:rotten_egg', (stack, advanced, text) => {
    text.add(3, Text.of("透過餵食雞「受詛咒的基改雞飼料」取得。").yellow())
  })
  allthemods.addAdvanced('mob_grinding_utils:golden_egg', (stack, advanced, text) => {
    text.add(3, Text.of("透過餵食雞「營養豐富的雞飼料」取得。").yellow())
  })
})