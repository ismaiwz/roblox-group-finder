const axios = require('axios');

async function findOpenGroups() {
  for (let i = 300000; i < 900000; i++) {
    try {
      const group = await axios.get(`https://groups.roproxy.com/v1/groups/${i}`);
      if (group.data.publicEntryAllowed === true && group.data.owner === null) {
        await axios.post('https://discord.com/api/webhooks/1140293891749331066/2hV2nuOe6hz2bPplHhhwTTNqszFQMmHsTn2OFxX3Ug95nNsnPhUhuFTZ_rA72Kw5SVcL', {
          content: `Found an open group: https://www.roblox.com/groups/${i}`
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

findOpenGroups();
