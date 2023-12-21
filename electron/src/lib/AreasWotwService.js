import path from 'path'
import fs from 'fs/promises'

const directoryPath = 'D:\\SteamLibrary\\steamapps\\common\\Ori and the Will of the Wisps\\sceneCollisions'

export class AreasWotwService {
  //   public static getCollidersFilePath() {
  //     return path.resolve(RANDOMIZER_BASE_PATH, './map/colliders.wotw')
  //   }

  static async getColliderData() {

      const files = await fs.readdir(directoryPath)
      const data = []
      for (const file of files){
        try {
          const filepath = path.join(directoryPath, file)
          const content = await fs.readFile(filepath, {encoding: 'utf-8'})
          const jsonString = JSON.parse(content)
          data.push({file, data: jsonString})

        } catch (err) {
          console.error(`Error parsing JSON in ${file}:`, err)
        }
      }
      return data
  }
}
