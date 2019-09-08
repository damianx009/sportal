package pl.sportal.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "REVIEWS")
public class Review {
    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Rate Value cannot be null")
    @Min(value= 1, message = "Rate should be greater or equal 1")
    @Max(value= 5, message = "Rate should be less than or equal 5")
    @Column(name = "RATE_VALUE")
    private Integer rateValue;

    @Size(max=500, message = "Description should be less than 500 characters")
    @Column(name = "RATE_DESCRIPTION")
    private String rateDescription;

    @NotNull(message = "Username cannot be null")
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USERID")
    private ApplicationUser username;

}
