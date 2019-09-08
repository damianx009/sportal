package pl.sportal.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Data
@EqualsAndHashCode(exclude = {"sportGame", "reviewSet"})
@ToString(exclude = {"sportGame", "reviewSet"})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "PLAYING_FIELDS")
public class PlayingField {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Sport game id cannot be null")
    @OneToOne
    @JoinColumn(name = "FK_SPORT_GAME", referencedColumnName = "ID")
    private SportGame sportGame;


    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_PLAYING_FIELD")
    private Set<Review> reviewSet;
}
