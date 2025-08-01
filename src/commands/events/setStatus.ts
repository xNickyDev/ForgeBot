import { BaseCommand } from "@tryforge/forgescript"

export default new BaseCommand({
  type: "ready",
  code: `
  $jsonLoad[statuses;$readFile[data/statuses.json]]
  $setStatus[online;Custom;$eval[$env[statuses;0];false]]
  
  $let[n;1]
  $setInterval[
    $setStatus[online;Custom;$eval[$env[statuses;$get[n]];false]]
    $letSum[n;1]
    $if[$get[n]>=$arrayLength[statuses];$let[n;0]]
  ;1m]
  `
})