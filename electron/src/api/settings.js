import { SettingsService } from '~/electron/src/lib/SettingsService'
import { dialog } from 'electron'

export default {
  async readSettings() {
    return await SettingsService.getCurrentSettings()
  },
  setSettings(event, settings) {
    SettingsService.setSettings(settings)
  },
  async writeSettings() {
    await SettingsService.writeSettings()
  },
  async selectSteamPath() {
    const result = await dialog.showOpenDialog({
      defaultPath: (await SettingsService.getCurrentSettings()).Paths.Steam,
      properties: ['openFile'],
      filters: [
        { name: 'Executables', extensions: ['exe'] },
      ],
    })

    if (!result.canceled) {
      return result.filePaths[0]
    }

    return null
  },
  shouldShowImportInfoDialog() {
    return SettingsService.shouldShowImportInfoDialog()
  }
}
