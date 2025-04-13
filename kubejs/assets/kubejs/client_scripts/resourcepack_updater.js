const Minecraft = Java.loadClass("net.minecraft.client.Minecraft");
const ResourceOverridesManager = Java.loadClass("fuzs.resourcepackoverrides.client.data.ResourceOverridesManager")

// 重設資源包
{
    let instance = Minecraft.getInstance()
    let resourcePacks = ResourceOverridesManager.getDefaultResourcePacks(true)
    
    // 清除現有的資源包設定
    instance.options.resourcePacks.clear()
    
    // 加入預設資源包
    for(let i = 0; i < resourcePacks.size(); ++i) {
        instance.options.resourcePacks.add(resourcePacks.get(i))
    }
    
    // 儲存設定
    instance.options.save()
}