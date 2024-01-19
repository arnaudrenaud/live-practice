import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Place extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  geocodeApiPlaceId!: number;

  @Column()
  name!: string;

  @Column()
  latitude!: number;

  @Column()
  longitude!: number;

  static async createNew(
    geocodeApiPlaceId: number,
    name: string,
    latitude: number,
    longitude: number
  ) {
    const place = new Place();
    place.geocodeApiPlaceId = geocodeApiPlaceId;
    place.name = name;
    place.latitude = latitude;
    place.longitude = longitude;

    await place.save();
    return place;
  }

  // static getAll() {};
}
