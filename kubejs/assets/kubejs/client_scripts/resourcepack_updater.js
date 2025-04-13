const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
const ResourceOverridesManager = Java.loadClass("fuzs.resourcepackoverrides.client.data.ResourceOverridesManager");

{
    let instance = Minecraft.getInstance();
    let defaultResourcePacks = ResourceOverridesManager.getDefaultResourcePacks(true);
    let currentResourcePacks = instance.options.resourcePacks;
    let needModification = false;
    
    // 建立一個新的資源包清單
    let newResourcePacks = [];
    
    // 首先加入玩家新增的非預設資源包
    for (let i = 0; i < currentResourcePacks.size(); ++i) {
        let currentPack = currentResourcePacks.get(i);
        // 若該資源包不在預設清單中，加入到新清單
        if (!defaultResourcePacks.contains(currentPack)) {
            newResourcePacks.push(currentPack);
        }
    }
    
    // 然後加入所有預設資源包，保持它們的順序
    for (let i = 0; i < defaultResourcePacks.size(); ++i) {
        let defaultPack = defaultResourcePacks.get(i);
        newResourcePacks.push(defaultPack);
        
        // 若目前清單中不包含此預設資源包，標記為需要修改
        if (!currentResourcePacks.contains(defaultPack)) {
            needModification = true;
        }
    }
    
    // 若需要修改，則更新資源包清單
    if (needModification || currentResourcePacks.size() !== newResourcePacks.length) {
        instance.options.resourcePacks.clear();
        
        for (let i = 0; i < newResourcePacks.length; ++i) {
            instance.options.resourcePacks.add(newResourcePacks[i]);
        }
        
        instance.options.save();
        console.log("資源包已更新：確保預設資源包存在且順序正確");
    }
}