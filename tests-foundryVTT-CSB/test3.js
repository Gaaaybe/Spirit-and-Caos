${#?#{_Rolagem}}$
<table>
<tbody>
<tr>
<th>Rolagem</th>
</tr>
<tr>
<td>Roll for Life Points</td>
<td>${Roll_Life_Points:= [1d20]}$</td>
</tr>
<tr>
<td>Life Points Modifiers</td>
<td>${Life_Points_Dice_Mod + (HasBed ? 3 : 0)}$</td>
</tr>
<tr>
<td>Roll for Spirit Points</td>
<td>${Roll_Spirit_Points:= [1d20]}$</td>
</tr>
<tr>
<td>Spirit Points Modifiers</td>
<td>${Spirit_Points_Dice_Mod + (HasBed ? 3 : 0)}$</td>
</tr>
</tbody>
</table>
<p><strong>You have regenerated ${Life_Points_Total_Regen:= Roll_Life_Points + Life_Points_Dice_Mod}$ Life Points and ${Spirit_Points_Total_Regen:= Roll_Spirit_Points + Spirit_Points_Dice_Mod}$ Spirit Points</strong></p>
${#setPropertyInEntity('self', 'Life_Points_Total', "min(Life_Points_Total + Life_Points_Total_Regen, Life_Points_Max)")}$ ${#setPropertyInEntity('self', 'Spirit_Points_Total', "min(Spirit_Points_Total + Spirit_Points_Total_Regen, Spirit_Points_Max)")}$

${#concat(
    ?{Quantidade de Desvantagens[number]},
    ?{Quantidade de Vantagens[number]},
    ?{Usar inspiração?[check]}
    )}$