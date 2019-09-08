package pl.sportal.entity;


import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@EqualsAndHashCode(exclude = {"playingFieldSet"})
@ToString(exclude = {"playingFieldSet"})
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "FIELD_HOUSES")
public class FieldHouse {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Field house name cannot be null")
    @Column(name = "NAME")
    private String name;

    @NotBlank(message = "Field house street cannot be null")
    @Column(name = "STREET")
    private String street;

    @NotBlank(message = "Field house home number cannot be null")
    @Column(name = "HOME_NO")
    private String homeNo;

    @NotBlank(message = "Field house postal code cannot be null")
    @Column(name = "POSTAL_CODE")
    private String postalCode;

    @NotBlank(message = "Field house city cannot be null")
    @Column(name = "CITY")
    private String city;

    @NotNull(message = "Field house latitude cannot be null")
    @Column(name = "LATITUDE")
    private Integer latitude;

    @NotNull(message = "Field house longitude cannot be null")
    @Column(name = "LONGITUDE")
    private Integer longitude;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name="FK_FIELD_HOUSE")
    private Set<PlayingField> playingFieldSet;
}
