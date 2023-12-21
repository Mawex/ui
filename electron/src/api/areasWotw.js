import { AreasWotwService } from '~/electron/src/lib/AreasWotwService'

export default {
  async getColliderData() {
    return await AreasWotwService.getColliderData()
  },
}
